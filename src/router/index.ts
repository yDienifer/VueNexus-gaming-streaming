import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('../views/Main.vue'),
    },
    {
      path: "/account",
      name: "account",
      component: () => import('../views/navbar_shortcuts/RegistrationLoginForm.vue'),
    },
    {
      path: "/community",
      name: "Community",
      component: () => import("../views/sidebar_shortcuts/Community.vue"),
    },
  ],
});

export default router;