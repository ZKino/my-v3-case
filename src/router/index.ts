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
<<<<<<< HEAD
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
    {
      path: '/loading',
      name: 'loading',
      component: () => import('@/views/LoadingDemo.vue'),
    },
    {
      path: '/puzzle',
      name: 'puzzle',
      component: () => import('@/views/PuzzleDemo.vue'),
    },
=======
>>>>>>> f4d07392eab317e178b8c0c8ee07a82dd3faec8a
  ],
})

export default router
