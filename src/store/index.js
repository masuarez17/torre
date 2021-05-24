import Vue from 'vue'
import Vuex from 'vuex'
import { fetchQuery, fetchGenome, profilePicture, hasVideo, uploadVideo } from '@/utils/searchRequest'
import { register, login } from '@/utils/loginRequest'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryResults: [],
    query: '',
    offset: 0,
    total: 0,
    user: {}
  },
  mutations: {
    SET_RESULTS (state, results) {
      state.queryResults = results
    },
    CLEAR_RESULTS (state) {
      state.queryResults = []
    },
    SET_USER (state, user) {
      state.user = user
    },
    CLEAR_USER (state) {
      state.user = {}
    },
    ADD_OFFSET (state) {
      state.offset += 5
    },
    DIFF_OFFSET (state) {
      state.offset -= 5
    },
    SET_QUERY (state, query) {
      state.query = query
    },
    CLEAR_QUERY (state) {
      state.query = ''
    },
    SET_TOTAL (state, total) {
      state.total = total
    },
    CLEAR_TOTAL (state) {
      state.total = 0
    }
  },
  actions: {
    fetchQuery ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        const results = []
        commit('CLEAR_RESULTS')
        commit('CLEAR_TOTAL')
        fetchQuery(payload)
          .then(response => {
            response.data.results.forEach(result => {
              results.push(result)
            })
            commit('SET_TOTAL', response.data.total)
            console.log(results)
            commit('SET_RESULTS', results)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    fetchGenome ({ commit }, username) {
      return new Promise((resolve, reject) => {
        fetchGenome(username)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    register ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        register(payload)
          .then((response) => {
            console.log(response)
            resolve()
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    login ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('CLEAR_USER')
        login(payload)
          .then(response => {
            commit('SET_USER', response.data)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    profilePicture ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        profilePicture(payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    hasVideo ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        hasVideo(payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    uploadVideo ({ commit }, payload) {
      console.log('Upload')
      return new Promise((resolve, reject) => {
        uploadVideo(payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    logout ({ commit }) {
      commit('CLEAR_USER')
    },
    clearTotal ({ commit }) {
      commit('CLEAR_TOTAL')
    },
    addOffset ({ commit }) {
      commit('ADD_OFFSET')
    },
    diffOffset ({ commit }) {
      commit('DIFF_OFFSET')
    },
    setQuery ({ commit }, query) {
      commit('CLEAR_QUERY')
      commit('SET_QUERY', query)
    }
  },
  modules: {}
})
