import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Favs from '@/pages/Favs'
import { authGuard } from '../services/auth/authGuard'
import { myAuthGuard } from '../guards/MyAuthGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter: myAuthGuard,
    component: Home
  },
  {
    path: '/search',
    beforeEnter: authGuard,
    name: 'search',
    component: Search
  },
  {
    path: '/favs',
    beforeEnter: authGuard,
    name: 'favorites',
    component: Favs
  },
  {
    path: '**',
    redirect: '/'
  }
]

export default new VueRouter({ mode: 'history', routes })
