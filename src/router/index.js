import { createRouter, createWebHistory } from 'vue-router'

import { HomeView, FoodsView, FoodDetailView, CartView } from '@/views'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/foods',
    name: 'foods',
    component: FoodsView,
  },
  {
    path: '/products/:id',
    name: 'food',
    component: FoodDetailView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
