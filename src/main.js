import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

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
  Notify

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

  },
  directives: {
  },
  plugins: {
    Notify
  }
 })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
