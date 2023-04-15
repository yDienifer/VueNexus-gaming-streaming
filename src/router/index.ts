import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/conta",
      name: "conta",
      component: () => import("../views/layoutConta.vue"),
    },
  ],
});

export default router;