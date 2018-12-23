import product_data from '../../mock/product'
export default {
  state: {
    products: [],
    count: 0
  },
  mutations: {
    setProductList(state, data) {
      state.products = data
    }
  },
  actions: {
    getProductsList({commit}) {
      setTimeout(function () {
        commit('setProductList', product_data)
        
      }, 100)
    }
  }
}