import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    global: [
      {
        packages: [
          {
            days: 30,
            expires: 3,
            price: 100
          },
          {
            days: 45,
            expires: 4,
            price: 100
          },
          {
            days: 60,
            expires: 6,
            price: 100
          },
          {
            days: 90,
            expires: 12,
            price: 100
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
