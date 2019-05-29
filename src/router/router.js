import Vue from 'vue'
import Router from 'vue-router'
import AssociationsMethodStartPage from '../components/PsyTests/AssociationsMethod/Pages/MainPage'
import AssociationsMethodTest from '../components/PsyTests/AssociationsMethod/Pages/Test'
import AssociationsMethodHistory from '../components/PsyTests/AssociationsMethod/Pages/History'
import Authentication from '../components/System/Authentication'
import Histogramm from '../components/PsyTests/AssociationsMethod/Components/Histogramm'


Vue.use(Router);
export default new Router({
  mode: 'history', // убирает /#
  routes: [
    // System
    {path: '/Authentication', component: Authentication},

    {path: '/Histogramm', component: Histogramm},


    { path: '/AssociationsMethod', component: AssociationsMethodStartPage,
      /*children:
        [
          {path: 'test', component: AssociationsMethodTest},
          {path: 'history', component: AssociationsMethodHistory}
        ]*/
    },
    {path: '/AssociationsMethod/test', component: AssociationsMethodTest},
    {path: '/AssociationsMethod/history', component: AssociationsMethodHistory}


  ]
})
