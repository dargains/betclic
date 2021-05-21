import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// axios.defaults.baseURL = 'https://mysteryweek.pt/directus/public/mysteryw/items'

export default new Vuex.Store({
  state: {
    user: {
      id: 1,
      name: 'Andre',
      email: 'andre@email.com'
    },
    games: [
      {
        id: 0,
        team1: 1,
        team2: 2
      },
      {
        id: 1,
        team1: 3,
        team2: 4
      }
    ],
    countries: [
      {
        id: 1,
        name: 'Ucrânia',
        flag: 'ua'
      },
      {
        id: 2,
        name: 'Austria',
        flag: 'at'
      },
      {
        id: 3,
        name: 'Rússia',
        flag: 'ru'
      },
      {
        id: 4,
        name: 'Dinamarca',
        flag: 'dk'
      }
    ]
  },
  mutations: {},
  actions: {
    login (store, payload) {
      console.log(store, payload)
    },
    getBets ({ commit }) {

    },
    sendBet (store, payload) {
      console.log(store, payload)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('ok')
        }, 1000)
      })
    }
  }
})
