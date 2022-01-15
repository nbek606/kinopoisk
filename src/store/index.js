import Vue from 'vue'
import Vuex from 'vuex'

import film from  './modules/film'
import loader from './modules/loader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
      film,
      loader
  ]
})
