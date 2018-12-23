import selections_data from '../../mock/selections'

export default {
  state: {
    selections: []
  },
  mutations: {
    setSelections(state, data) {
      state.selections = data
    }
  },
  actions: {
    getSelections({commit}) {
      commit('setSelections', selections_data)
    }
  }
}