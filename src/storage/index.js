import Vue from 'vue'
import Vuex from 'vuex'
import systemModule from './modules/system'
import user from './modules/user'
import testData from './modules/tests/AssociationsMethodData'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    systemModule,
    user,
    testData
  }
})
