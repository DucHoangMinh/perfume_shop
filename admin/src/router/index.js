import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/dashboard',
    name: 'dashboard',
    component: Home
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    component: () => import('@/views/ProductsView.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import('@/views/CouponsView.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import('@/views/UiView.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import('@/views/ResponsiveView.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    meta: {
      title: 'Branch',
    },
    path: '/branch',
    name: 'branch',
    component: () => import('@/views/DatataMaster/Branch/index.vue')
  },
  {
    meta: {
      title: 'Fragrant'
    },
    path: '/fragrant',
    name: 'fragrant',
    component: () => import('@/views/DatataMaster/Fragrant/index.vue')
  },
  {
    meta: {
      title: 'Error',
      path: '/error',
      name: 'error',
      component: () => import('@/views/ErrorView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
