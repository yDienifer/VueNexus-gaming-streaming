import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: "/agentGuides",
      name: "AgentGuides",
      component: () => import('../views/sidebar_shortcuts/AgentGuides.vue')
    },
    {
      path: "/community",
      name: "Community",
      component: () => import("../views/sidebar_shortcuts/Community.vue"),
    },
  ],
});

export default router;