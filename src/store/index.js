import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://eurovaibater.pt/directus/public/betclic/'

export default new Vuex.Store({
  state: {
    user: {},
    matches: [],
    teams: [],
    news: []
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
  mutations: {
    setUser (state, payload) {
      console.log(payload)
      state.user = payload
    },
    setTeams (state, payload) {
      state.teams = payload
    },
    setMatches (state, payload) {
      state.matches = payload
    },
    setNews (state, payload) {
      state.news = payload
    }
  },
  actions: {
    login ({ commit, dispatch }, payload) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/authenticate', payload).then(response => {
          const { user } = response.data.data
          const newUser = {
            token: response.data.data.token,
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          }
          dispatch('getData', newUser.token).then(() => {
            commit('setUser', newUser)
          })
        }).catch(error => {
          reject(error.response.data.error.message)
        })
      })
    },
    logout ({ commit }) {
      const emptyUser = {}
      commit('setUser', emptyUser)
    },
    async getData ({ commit }, token) {
      const auth = { headers: { Authorization: `Bearer ${token}` } }
      const teams = await axios('/items/teams', auth)
      const matches = await axios('/items/matches', auth)
      const news = await axios('/items/news', auth)
      return new Promise(resolve => {
        commit('setTeams', teams.data.data)
        commit('setMatches', matches.data.data)
        commit('setNews', news.data.data)
        resolve()
      })
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
