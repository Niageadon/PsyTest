import Vue from 'vue'
import Vuex from 'vuex'
import systemModule from './modules/system'
import user from './modules/user'
import AssociationsMethodData from './modules/tests/AssociationsMethodData'
import ReadEmotionsData from './modules/tests/ReadEmotionsData'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    systemModule,
    user,
    AssociationsMethodData,
    ReadEmotionsData
  }
})
