<template>
  <section
    id="games"
    class="games"
  >
    <div class="wrapper">
      <header>
        <figure class="paperTop">
          <img
            src="../assets/images/paper_2 1.svg"
            alt="paper top"
          >
        </figure>
        <h2>Jogos do dia</h2>
        <div>
          <p>Coloca o resultado e faz a tua aposta</p>
          <time
            datetime="2008-02-14"
            v-text="currentDate"
          />
        </div>
      </header>
      <div
        v-if="done"
        class="done"
      >
        <p>a tua aposta foi realizada</p>
        <p>volta aqui no próximo dia de jogos</p>
      </div>
      <div
        v-if="matches.length"
        class="table"
      >
        <li
          v-for="(match, index) in matches"
          :key="match.id"
          class="game"
          :class="{ disabled: match.done || now.diff(moment(match.time).subtract(30, 'minutes'), 'minutes') > 0}"
        >
          <label
            class="team"
            :for="`game${index}1`"
          >
            <p v-text="getCountry(match.team1).name" />
            <figure class="flag">
              <img
                :src="`https://flagcdn.com/${getCountry(match.team1).flag}.svg`"
                :alt="getCountry(match.team1).name"
              >
            </figure>
            <input
              :id="`game${index}1`"
              v-model="bets[match.id].team1"
              type="number"
            >
          </label>
          <span class="divider">:</span>
          <label
            class="team"
            :for="`game${index}2`"
          >
            <input
              :id="`game${index}2`"
              v-model="bets[match.id].team2"
              type="number"
            >
            <figure class="flag">
              <img
                :src="`https://flagcdn.com/${getCountry(match.team2).flag}.svg`"
                :alt="getCountry(match.team2).name"
              >
            </figure>
            <p v-text="getCountry(match.team2).name" />
          </label>
        </li>
        <button
          class="button"
          @click="onBet"
        >
          <span>apostar</span>
        </button>
        <figure class="paperBottom">
          <img
            src="../assets/images/paper_2 2.svg"
            alt="paper bottom"
          >
        </figure>
      </div>
      <div
        v-else
        class="none"
      >
        Não há jogos disponíveis no momento
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
const monthNames = ['Maio', 'Junho', 'Julho', 'Agosto']

export default {
  name: 'Games',
  data () {
    return {
      bets: {},
      done: false,
      moment
    }
  },
  computed: {
    now () {
      return moment()
    },
    matches () {
      return this.$store.state.matches.filter(match => !match.done && moment(match.time).isSame(new Date(), 'day'))
    },
    teams () {
      return this.$store.state.teams
    },
    currentDate () {
      const now = new Date()
      return `${now.getDate()} de ${monthNames[now.getMonth() - 4]}`
    }
  },
  created () {
    const result = {}
    const user = this.$store.state.user
    const userBets = this.$store.state.bets.filter(bet => bet.user === parseInt(user.id))
    this.matches.forEach(match => {
      const userBet = userBets.find(bet => bet.match_id === match.id)
      if (userBet) {
        result[match.id] = { team1: userBet.team1, team2: userBet.team2, done: true }
        match.done = true
      } else result[match.id] = { team1: match.score_1, team2: match.score_2 }
    })
    this.bets = result
  },
  methods: {
    getCountry (id) {
      return this.teams.find(country => country.id === id)
    },
    async onBet () {
      const bets = []
      for (const gameId in this.bets) {
        if (!!this.bets[gameId].team1 && !!this.bets[gameId].team2 && !this.bets[gameId].done) {
          bets.push({
            match_id: parseInt(gameId),
            team1: this.bets[gameId].team1,
            team2: this.bets[gameId].team2
          })
        }
      }
      if (bets.length) {
        const response = await this.$store.dispatch('sendBet', bets)
        if (response) {
          this.done = true
          setTimeout(() => {
            location.reload()
          }, 3000)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.games {
  background-color: #df0c14;
  z-index: 2;
}
.paperTop {
  position: absolute;
  right: 0;
  left: 0;
  bottom: -18%;
}
header {
  padding: 0 30px;
  margin-bottom: 12px;
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    transform: rotate(-1.5deg);
    background-image: url("../assets/images/plastic_1.png");
    background-color: #000;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 10px 16px;
    display: inline-block;
    top: -20px;
  }
  div {
    background-color: #f4f4f3;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-size: 16px;
  }
  time {
    font-size: 24px;
  }
}
.done {
  position: absolute;
  right: 40px;
  left: 40px;
  bottom: 30px;
  top: 30px;
  padding: 30px;
  background-color: rgba(#000, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  p {
    font-size: 26px;
    color: #fff;
  }
}
.table {
  background-color: #f4f4f3;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 0 30px;
}
.game {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #c4c4c4;
}
.disabled {
  pointer-events: none;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(#fff, 0.5);
  }
}
.team {
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px 0;
  gap: 8px;
  &:nth-of-type(1) {
    justify-content: flex-end;
  }
  &:nth-of-type(2) {
    justify-content: flex-start;
  }
  p {
    text-transform: uppercase;
    font-size: 30px;
    line-height: 33px;
    top: 2px;
  }
  input {
    border: 0;
    text-align: center;
    background-color: #f4f4f3;
    font-size: 26px;
    width: 50px;
    height: 50px;
  }
}
.flag {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(white, 1);;
  margin: 0 20px;
  flex-shrink: 0;
  img {
    width: 37px;
    height: 24px;
    left: -7px;
  }
}
.button {
  transform: rotate(-1.5deg);
  background-image: url("../assets/images/plastic_2.png");
  background-color: #000;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
  top: 30px;
  z-index: 1;
  span {
    font-size: 28px;
    color: #fff;
    font-weight: bold;
  }
}
.none {
  padding: 30px;
  background-color: #f4f4f3;
  text-align: center;
}
.paperBottom {
  position: absolute;
  right: 0;
  left: 0;
  bottom: -75px;
}
@media screen and (max-width: 768px) {
  header {
    padding: 0;
    margin-bottom: 0;
    div {
      padding: 20px;
      flex-direction: column-reverse;
    }
    p {
      line-height: 22px;
      margin-top: 16px;
    }
    time {
      font-size: 22px;
    }
  }
  .table {
    gap: 8px;
    padding: 0 10px;
  }
  .game {
    gap: 4px;
  }
  .team {
    p {
      font-size: 12px;
      line-height: 14px;
    }
    input {
      width: 20px;
      height: 20px;
      font-size: 16px;
    }
  }
  .flag {
    margin: 0;
    width: 18px;
    height: 18px;
    border-width: 2px;
    img {
      width: 22px;
      height: 15px;
      left: -4px;
    }
  }
  .paperTop {
    bottom: 60%;
  }
  .paperBottom {
    bottom: 0;
    top: 100%;
  }
  .done {
    right: 12px;
    left: 12px;
    p {
      font-size: 18px;
    }
  }
}
</style>
