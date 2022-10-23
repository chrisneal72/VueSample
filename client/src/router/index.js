import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/components/Landing/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Landing
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About/AboutVue.vue')
  },
  {
    path: '/data',
    name: 'data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Data/DataVue.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
