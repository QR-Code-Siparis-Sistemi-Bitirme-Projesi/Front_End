import { createRouter, createWebHistory } from 'vue-router'
import Listele from "@/views/v_Listeleme.vue";

const routes = [
  {
    path: '/',
    name: 'Listele',
    component: Listele
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
