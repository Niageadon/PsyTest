import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '../components/AssociationsMethod/MainPage'


Vue.use(Router);

export default new Router({
  mode: 'history', // убирает /#
  routes: [
    { path: '/AssociationsMethod', name: 'Home', component: StartPage,
    children: []
    },



  ]
})
