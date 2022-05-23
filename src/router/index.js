import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main'
import Category from '../views/Category'
import Dashboard from '../views/Dashboard';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
