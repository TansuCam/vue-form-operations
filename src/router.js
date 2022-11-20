import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component:  () => import("@/views/Login")
  },
  {
    path: "/home",
    component:  () => import("@/views/Home")
  },
  {
    path: "/detail",
    component:  () => import("@/views/Details")
  }
]

const router = createRouter({
  routes,
  history : createWebHistory()
})

export default router