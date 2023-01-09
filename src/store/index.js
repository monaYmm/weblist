import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import list from './modules/list'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    list
  },
  plugins: [createPersistedState({
    // Partial data persistence
    paths: ['list']
  })] // permanent storage
})

export default store
