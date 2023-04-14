import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '@/views/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)',
      redirect: '/',
    },
    {
      path: '/',
      name: 'hello',
      component: HelloWorld,
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('@/views/PiniaDemo.vue'),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/CalendarDemo.vue'),
    },
  ],
})

export default router
