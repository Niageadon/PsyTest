import Vue from 'vue'
import Router from 'vue-router'
import AssociationsMethodStartPage from '../components/PsyTests/AssociationsMethod/Pages/MainPage'
import AssociationsMethodTest from '../components/PsyTests/AssociationsMethod/Pages/Test'
import AssociationsMethodHistory from '../components/PsyTests/AssociationsMethod/Pages/History'
import Authentication from '../components/System/Authentication'
import EmotionsReadStartPage from '../components/Learn/EmotionsRead/MainPage'
import EmotionsReadTest from '../components/Learn/EmotionsRead/Test'


Vue.use(Router);
export default new Router({
  mode: 'history', // убирает /#
  routes: [
    // System
    {path: '/Authentication', component: Authentication},



    { path: '/AssociationsMethod', component: AssociationsMethodStartPage,
      /*children:
        [
          {path: 'test', component: AssociationsMethodTest},
          {path: 'history', component: AssociationsMethodHistory}
        ]*/
    },
    {path: '/AssociationsMethod/test', component: AssociationsMethodTest},
    {path: '/AssociationsMethod/history', component: AssociationsMethodHistory},

    {path: '/EmotionsRead', component: EmotionsReadStartPage},
    {path: '/EmotionsRead/test', component: EmotionsReadTest},


  ]
})
