import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './storage/index'
import * as fireBase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import VueRouter from 'vue-router'
import fbConfig from './assets/firebaseConfig'


fireBase.initializeApp(fbConfig);
Vue.use(VueRouter);

import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QInput,
  QScrollArea,
  QForm,
  Notify,
  QStepper,
  QStep,
  QSeparator,
  QStepperNavigation,
  QCard,
  QCardSection,
  QCardActions,
  QTabPanels,
  QTabPanel,
  QLinearProgress,
  Dialog,
  QDialog,
  QImg,

} from 'quasar'


Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QInput,
    QScrollArea,
    QForm,
    QStepper,
    QStep,
    QSeparator,
    QStepperNavigation,
    QCard,
    QCardSection,
    QCardActions,
    QTabPanels,
    QTabPanel,
    QLinearProgress,
    QDialog,
    QImg,
  },
  directives: {
  },
  plugins: {
    Notify,
    Dialog
  },
    cssAddon: true,
 });

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
  mounted(){
    // автологин, если в этой сессии пользователь делал авторизацию
    fireBase.auth().onAuthStateChanged(user =>{
      if (user){
        this.$store.dispatch('autoLogin', user); // загружает инфу о логине
        //this.$store.dispatch('getRecordsFromServer'); // загружает данные с сервера при загрузке
      }
    })
  },
}).$mount('#app')
