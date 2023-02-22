import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('@/views/HelloWorld.vue'),
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('@/views/PiniaDemo.vue'),
    },
  ],
})

export default router
