import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/conta',
      name: 'Conta',
      component: layoutCadastroConta,
    } */
  ]
})

export default router