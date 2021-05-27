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
    news: [],
    users: []
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
    },
    setUsers (state, payload) {
      state.users = payload
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
      const calls = [
        axios('/items/teams', state.auth),
        axios('/items/matches', state.auth),
        axios('/items/news', state.auth),
        axios('/users', state.auth)
      ]
      return new Promise(resolve => {
        Promise.all(calls).then(responses => {
          commit('setTeams', responses[0].data.data)
          commit('setMatches', responses[1].data.data)
          commit('setNews', responses[2].data.data)
          commit('setUsers', responses[3].data.data)
          resolve()
        })
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
