import LoginPage from '@/pages/Login/Login.vue'
import HomePage from '@/pages/index.vue'
// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/' , component: HomePage},
    { path: '/login', component: LoginPage},
    {
        path: '/:catchAll(.*)',
        component: Error
    }
  ]
})

export default router
