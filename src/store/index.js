import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://eurovaibater.pt/directus/public/betclic/'

export default new Vuex.Store({
  state: {
    user: {},
    auth: null,
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
      state.user = payload
    },
    setAuth (state, payload) {
      state.auth = payload
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
          commit('setAuth', { headers: { Authorization: `Bearer ${newUser.token}` } })
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
    async getData ({ state, commit }) {
      const teams = await axios('/items/teams', state.auth)
      const matches = await axios('/items/matches', state.auth)
      const news = await axios('/items/news', state.auth)
      return new Promise(resolve => {
        commit('setTeams', teams.data.data)
        commit('setMatches', matches.data.data)
        commit('setNews', news.data.data)
        resolve()
      })
    },
    getBets ({ commit }) {

    },
    async sendBet ({ state }, payload) {
      const batch = payload.map(bet => {
        const data = {
          user: state.user.id,
          ...bet
        }
        return axios.post('/items/bets', data, state.auth)
      })
      debugger
      return new Promise((resolve, reject) => {
        Promise.all(batch).then(responses => {
          resolve(true)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
})
