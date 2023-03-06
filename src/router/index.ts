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
      path: '/select',
      name: 'select',
      component: () => import('@/views/SelectBox.vue'),
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('@/views/WaterDemo.vue'),
    },
  ],
})

export default router
