import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ButtonsPlayground from './pages/ButtonsPlayground.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: ButtonsPlayground
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
