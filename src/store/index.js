import Vue from 'vue'
import Vuex from 'vuex'
import { takeTest, mcq } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    takeTest,
    mcq
  }
})
