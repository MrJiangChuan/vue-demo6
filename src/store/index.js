import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    //不带参数
    add(state){
      state.count++
    },
    //带参数
    addN(state, payload){
      state.count += payload
    }
  },
  actions: {
  },
  modules: {
  }
})
