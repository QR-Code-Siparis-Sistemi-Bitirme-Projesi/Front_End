import { createRouter, createWebHistory } from 'vue-router'
import TatliList from '../views/TatliList.vue'
import İcecekList from "../views/İcecekList.vue";
import SandvicList from "../views/SandvicList.vue";
import SpecialList from "../views/SpecialList.vue";
import BagelList from "../views/BagelList.vue";
import KahvaltilarList from "../views/KahvaltilarList.vue";


const routes = [
  {
    path: '/',
    name: 'TatliList',
    component: TatliList
  },
  {
    path: '/İcecekList',
    name: 'İcecekList',
    component: İcecekList
  },
  {
    path: '/SandvicList',
    name: 'SandvicList',
    component: SandvicList
  },
  {
    path: '/SpecialList',
    name: 'SpecialList',
    component: SpecialList
  },
  {
    path: '/BagelList',
    name: 'BagelList',
    component: BagelList
  },
  {
    path: '/KahvaltilarList',
    name: 'KahvaltilarList',
    component: KahvaltilarList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
