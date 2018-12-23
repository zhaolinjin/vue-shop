import Vue from 'vue'
import Vuex from 'vuex'
import selections from './modules/selections'
import products from './modules/product-list'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    selections,
    products
  }
})