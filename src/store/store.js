import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    navBarOption: ''
  },
  getters: {
    getNavBarOption (state) {
      return state.navBarOption
    }
  },
  actions: {
    changeNavBarSelection ({
      commit
    }, option) {
      commit('setNavBarOption', option)
    }
  },
  mutations: {
    setNavBarOption (state, option) {
      state.navBarOption = option
    }
  }
})

export default store
