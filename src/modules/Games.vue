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
        v-if="matches.length"
        class="table"
      >
        <li
          v-for="(match, index) in matches"
          :key="match.id"
          class="game"
        >
          <label
            class="team"
            :for="`game${index}1`"
          >
            <p v-text="getCountry(match.team1).name" />
            <figure class="flag">
              <img
                :src="`https://www.countryflags.io/${getCountry(match.team1).flag}/flat/64.png`"
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
                :src="`https://www.countryflags.io/${getCountry(match.team2).flag}/flat/64.png`"
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
const monthNames = ['Maio', 'Junho', 'Julho', 'Agosto']

export default {
  name: 'Games',
  data () {
    return {
      bets: {}
    }
  },
  computed: {
    matches () {
      return this.$store.state.matches.filter(match => match.open)
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
    this.matches.forEach(game => {
      result[game.id] = { team1: null, team2: null }
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
        if (!!this.bets[gameId].team1 && !!this.bets[gameId].team2) {
          bets.push({
            match_id: parseInt(gameId),
            team1: this.bets[gameId].team1,
            team2: this.bets[gameId].team2
          })
        }
      }
      if (bets.length) {
        const response = await this.$store.dispatch('sendBet', bets)
        response
          ? console.log('ok')
          : console.log('fail')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .games {
    background-color: #DF0C14;
    z-index: 2;
  }
  header {
    padding: 0 30px;
    margin-bottom: 12px;
    .paperTop {
      position: absolute;
      right: 0;
      left: 0;
      top: -50px;
    }
    h2 {
      font-size: 28px;
      font-weight: bold;
      color: #FFF;
      transform: rotate(-1.5deg);
      background-image: url('../assets/images/plastic_1.png');
      background-color: #000;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      padding: 10px 16px;
      display: inline-block;
      top: -20px;
    }
    div {
      background-color: #F4F4F3;
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
  .table {
    background-color: #F4F4F3;
    display: flex;
    gap: 16px;
    flex-direction: column;
    padding: 0 30px;
  }
  .game {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #C4C4C4;
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
      background-color: #F4F4F3;
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
    border: 4px solid white;
    margin: 0 20px;
    img {
      height: 38px;
      width: 38px;
      top: -7px;
      left: -7px;
    }
  }
  .button {
    transform: rotate(-1.5deg);
    background-image: url('../assets/images/plastic_2.png');
    background-color: #000;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
    top: 30px;
    z-index: 1;
    span {
      font-size: 28px;
      color: #FFF;
      font-weight: bold;
    }
  }
  .none {
    padding: 30px;
    background-color: #F4F4F3;
    text-align: center;
  }
  .paperBottom {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -75px;
  }
</style>
