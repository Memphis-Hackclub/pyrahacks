import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/about",
    component: () => import("../pages/About.vue"),
  },
  {
    path: "/404",
    component: () => import("../pages/404.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
