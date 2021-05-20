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
                :src="getCountry(game.team1).flag"
                :alt="getCountry(game.team1).name"
              >
            </figure>
            <input
              :id="`game${index}1`"
              type="text"
            >
          </label>
          <span class="divider">:</span>
          <label
            class="team"
            :for="`game${index}2`"
          >
            <input
              :id="`game${index}2`"
              type="text"
            >
            <figure class="flag">
              <img
                :src="getCountry(game.team2).flag"
                :alt="getCountry(game.team2).name"
              >
            </figure>
            <p v-text="getCountry(game.team2).name" />
          </label>
        </li>
        <button>Apostar</button>
      </div>
    </div>
  </section>
</template>

<script>
const monthNames = ['Maio', 'Junho', 'Julho', 'Agosto']

export default {
  name: 'Games',
  computed: {
    games () {
      return this.$store.state.games
    },
    countries () {
      return this.$store.state.countries
    },
    currentDate () {
      const now = new Date()
      return `${now.getDate()} de ${monthNames[now.getMonth() - 4]}`
    }
  },
  methods: {
    getCountry (id) {
      return this.countries.find(country => country.id === id)
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
  }
  .game {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .team {
    display: flex;
    align-items: center;
    flex: 1;
    padding: 10px 0;
    &:nth-of-type(1) {
      justify-content: flex-end;
    }
    &:nth-of-type(2) {
      justify-content: flex-start;
    }
    input {
      border: 1px solid lightgray;
      width: 20px;
      text-align: center;
    }
  }
  .flag {
    width: 16px;
    height: 12px;
    background-color: red;
  }
</style>
