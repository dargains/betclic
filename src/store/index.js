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
    users: [],
    bets: []
  },
  getters: {
    ranking (state) {
      return state.users.sort((a, b) => b.points - a.points)
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
    setBets (state, payload) {
      state.bets = payload
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
          dispatch('getData').then(() => {
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
    async getData ({ state, commit, dispatch }) {
      const calls = [
        axios('/items/teams', state.auth),
        axios('/items/news', state.auth),
        axios('/items/bets', state.auth),
        axios('/items/matches', state.auth),
        axios('/users', state.auth)
      ]
      return new Promise(resolve => {
        Promise.all(calls).then(responses => {
          commit('setTeams', responses[0].data.data)
          commit('setNews', responses[1].data.data)
          commit('setBets', responses[2].data.data)
          commit('setMatches', responses[3].data.data)
          const rankingObj = {
            users: responses[4].data.data.filter(user => user.role === 3),
            bets: responses[2].data.data,
            matches: responses[3].data.data
          }
          dispatch('buildRanking', rankingObj)
          resolve()
        })
      })
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
    },
    buildRanking ({ state, commit }, { users, bets, matches }) {
      const usersRanked = [...users.map(user => ({ ...user, points: 0 }))]
      const endedMatches = matches.filter(match => !match.open)
      usersRanked.forEach(user => {
        const userBets = bets.filter(bet => bet.user === user.id)
        endedMatches.forEach(match => {
          const thisBet = userBets.find(bet => bet.match_id === match.id)
          if (thisBet) {
            // apostou nesta partida
            if (thisBet.team1 === match.score_1 && thisBet.team2 === match.score_2) {
              // acertou o score
              user.points += 5
            } else if (match.score_1 === match.score_2) {
              // empatou
              if (thisBet.team1 === thisBet.team2) {
                // acertou o empate
                user.points += 3
              }
            } else {
              // um venceu
              if ((match.score_1 > match.score_2 && thisBet.team1 > thisBet.team2) || (match.score_1 < match.score_2 && thisBet.team1 < thisBet.team2)) {
                // acertou o vencedor
                user.points += 3
              }
            }
          }
        })
      })
      commit('setUsers', usersRanked)
    }
  }
})
