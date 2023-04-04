import { createRouter, createWebHistory } from 'vue-router'

import formCadastro from '@/views/form_cadastro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/conta',
      name: 'Conta',
      component: formCadastro,
    } 
  ]
})

export default router