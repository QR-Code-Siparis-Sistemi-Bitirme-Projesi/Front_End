import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'
import SepetView from '../views/SepetView.vue'
import LoginView from "../views/LoginView.vue"
import AdminView from "../views/AdminView"
import store from "@/store";

const routes = [
  {
    path: "/:notFound(.*)",
    component: MenuView
  },
  {
    path: '/SepetView',
    component: SepetView
  },
  {
    path: "/login",
    component: LoginView,
    meta: { girisGerekliMi: false }
  },
  {
    path: "/admin",
    component: AdminView,
    meta: { girisGerekliMi: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.girisGerekliMi && !store.getters["Admin/girisYapildiMi"]) {
    next("/login");
  } else if (!to.meta.girisGerekliMi && store.getters["Admin/girisYapildiMi"]) {
    next("/admin");
  } else {
    next();
  }
});

export default router
