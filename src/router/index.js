import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Login from '@/components/Login'
import Register from '@/components/Register'
import SearchMain from '@/views/SearchMain'
import Genome from '@/components/Genome'
import Search from '@/components/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    component: Main,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ]
  },
  {
    path: '/',
    component: SearchMain,
    children: [
      {
        path: '/search',
        name: 'Search',
        component: Search
      },
      {
        path: '/genome',
        name: 'Genome',
        component: Genome
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
