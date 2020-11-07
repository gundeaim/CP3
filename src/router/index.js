import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Quotes from '../views/quotes.vue'
import Review from '../views/review.vue'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Quotes',
    name: 'Quotes',
    component: Quotes
  },
  {
    path: '/Review',
    name: 'Review',
    component: Review
  },
  {
    path: '/List',
    name: 'List',
    component: List
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
