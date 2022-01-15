import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { NameRoute } from './router-utils.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: NameRoute.Home,
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
