import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 123,
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
        flag: 'asd'
      },
      {
        id: 2,
        name: 'Austria',
        flag: 'asd'
      },
      {
        id: 3,
        name: 'Rússia',
        flag: 'asd'
      },
      {
        id: 4,
        name: 'Dinamarca',
        flag: 'asd'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
