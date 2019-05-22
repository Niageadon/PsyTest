import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './storage/index'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import VueRouter from 'vue-router'

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
  QLinearProgress


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
    QLinearProgress
  },
  directives: {
  },
  plugins: {
    Notify
  },
  cssAddon: true
 });

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
