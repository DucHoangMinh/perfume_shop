import LoginPage from '@/pages/Login/Login.vue'
import HomePage from '@/pages/index.vue'
import TotalLoginPage from '@/pages/Login/index.vue'
// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/' , component: HomePage},
    {
      path: '/account',
      component: TotalLoginPage,
      children: [
        {path : '/login', component: LoginPage}
      ]
    },
    {
        path: '/:catchAll(.*)',
        component: Error
    },
    //Admin Routes
    {
      path: '/admin',
      component: () => import('@/pages/Admin/Home/index.vue'),
    }
  ]
})

export default router
