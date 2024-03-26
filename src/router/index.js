import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/RegistrationView.vue')
    }
  },
  {
    path: '/shirts',
    name: 'shirts',
    component: function () {
      return import('../views/ShirtsView.vue')
    },
  },
  {
    path: '/scarves',
    name: 'scarves',
    component: function () {
      return import('../views/ScarvesView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
