const list = {
  state: {
    breedsList: {}
  },
  mutations: {
    SAVE_BREEDSLIST: (state, data) => {
      state.breedsList = data
    }
  },
  actions: {
    SaveBreedslist ({ commit }, data) {
      commit('SAVE_BREEDSLIST', data)
    }
  },
  getters: {
    breedsList (state) {
      return state.breedsList
    }
  }
}
export default list
