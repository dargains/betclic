<template>
  <section
    id="games"
    class="games"
  >
    <div class="wrapper">
      <header>
        <div>
          <h2>Jogos do dia</h2>
          <p>Coloca o resultado e faz a tua aposta</p>
        </div>
        <time
          datetime="2008-02-14"
          v-text="currentDate"
        />
      </header>
      <div class="table">
        <li
          v-for="(game, index) in games"
          :key="game.id"
          class="game"
        >
          <label
            class="team"
            :for="`game${index}1`"
          >
            <p v-text="getCountry(game.team1).name" />
            <figure class="flag">
              <img
                :src="`https://www.countryflags.io/${getCountry(game.team1).flag}/flat/64.png`"
                :alt="getCountry(game.team1).name"
              >
            </figure>
            <input
              :id="`game${index}1`"
              v-model="bets[game.id].team1"
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
              v-model="bets[game.id].team2"
              type="number"
            >
            <figure class="flag">
              <img
                :src="`https://www.countryflags.io/${getCountry(game.team2).flag}/flat/64.png`"
                :alt="getCountry(game.team2).name"
              >
            </figure>
            <p v-text="getCountry(game.team2).name" />
          </label>
        </li>
        <button-vue
          label="apostar"
          @handle-click="onBet"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonVue from '../components/Button.vue'
const monthNames = ['Maio', 'Junho', 'Julho', 'Agosto']

export default {
  name: 'Games',
  components: {
    'button-vue': ButtonVue
  },
  data () {
    return {
      bets: {}
    }
  },
  computed: {
    games () {
      return this.$store.state.games
    },
    teams () {
      return this.$store.state.teams
    },
    currentDate () {
      const now = new Date()
      return `${now.getDate()} de ${monthNames[now.getMonth() - 4]}`
    },
    user () {
      return this.$store.state.user
    }
  },
  created () {
    const result = {}
    this.games.forEach(game => {
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
            user_id: this.user.id,
            game_id: parseInt(gameId),
            team1: this.bets[gameId].team1,
            team2: this.bets[gameId].team2
          })
        }
      }
      const response = await this.$store.dispatch('sendBet', bets)
      console.log(response)
    }
  }
}
</script>

<style lang="scss" scoped>
  .games {
    text-align: center;
  }
  .table {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    gap: 12px;
    flex-direction: column;
  }
  .game {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #eee;
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
      font-size: .8rem;
    }
    input {
      border: 1px solid lightgray;
      width: 20px;
      text-align: center;
    }
  }
  .flag {
    width: 24px;
  }
</style>
