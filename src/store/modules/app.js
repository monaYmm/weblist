const app = {
  state: {
    requestLoading: false
  },
  mutations: {
    SET_LOADING: (state, status) => {
      state.requestLoading = status
    }
  },
  actions: {
    SetLoading ({ commit }, status) {
      commit('SET_LOADING', status)
    }
  },
  getters: {
    requestLoading (state) {
      return state.requestLoading
    }
  }
}

export default app
