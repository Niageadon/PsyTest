import Vue from 'vue'
import Vuex from 'vuex'
import systemModule from './modules/system'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    systemModule,
    user
  }
})
