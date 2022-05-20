import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'
import SepetView from '../views/SepetView.vue'

const routes = [
  {
    path: '/',
    name: 'MenuView',
    component: MenuView
  },
  {
    path: '/SepetView',
    name: 'SepetView',
    component: SepetView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
