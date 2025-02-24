import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/gate',
    name: 'gate',
    component: () => import('../components/gate.vue')
  },
  {
    path: '/composition',
    name: 'composition',
    component: () => import('../components/composition.vue')
  },
  {
    path: '/read',
    name: 'read',
    component: () => import('../views/read.vue')
  },
  {
    path: '/readAdd',
    name: 'readAdd',
    component: () => import('../views/readAdd.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
