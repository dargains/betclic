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
    ],
    news: [
      {
        id: 1,
        title: 'Cristiano Lesionado após jogo com Holanda',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt, beatae odio ab eligendi dolor quia accusamus rerum nemo officiis.'
      },
      {
        id: 2,
        title: 'Título curto',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt, beatae odio ab eligendi dolor quia accusamus rerum nemo officiis.'
      },
      {
        id: 3,
        title: 'Um título de notícia muito grande sobre o jogo de Portugal com França',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt, beatae odio ab eligendi dolor quia accusamus rerum nemo officiis.'
      },
      {
        id: 4,
        title: 'Cristiano Lesionado após jogo com Holanda',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt, beatae odio ab eligendi dolor quia accusamus rerum nemo officiis.'
      },
      {
        id: 5,
        title: 'Título curto',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt, beatae odio ab eligendi dolor quia accusamus rerum nemo officiis.'
      },
      {
        id: 6,
        title: 'Um título de notícia muito grande sobre o jogo de Portugal com França',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt, beatae odio ab eligendi dolor quia accusamus rerum nemo officiis.'
      }
    ]
  },
  getters: {
    ranking () {
      const list = [
        {
          name: 'Andre',
          points: 130
        },
        {
          name: 'Duarte',
          points: 40
        },
        {
          name: 'Ricardo',
          points: 80
        }
      ]
      return list.sort((a, b) => b.points - a.points)
    }
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
