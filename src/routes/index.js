import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import { authGuard } from '../guards/AuthGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    beforeEnter: authGuard,
    name: 'search',
    component: Search
  },
  {
    path: '**',
    redirect: '/'
  }
]

export default new VueRouter({ mode: 'history', routes })
