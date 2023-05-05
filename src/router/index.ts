import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '@/views/HelloWorld.vue'

// 自动路由
const generateRoutes = () => {
  // 使用 import.meta.glob 导入所有 .vue 文件
  const files = import.meta.glob('@/views/**/*.vue')

  return Object.keys(files).map(path => {
    const name = path.replace(/^.+\/views\/(.+)\.vue$/g, '$1')
    const lowerName = name.toLowerCase()
    if (lowerName === 'helloworld') {
      return {
        path: '/',
        name: `${name}`,
        component: HelloWorld,
      }
    } else {
      return {
        path: `/${lowerName}`,
        name: `${name}`,
        component: () => import(`@/views/${name}.vue`),
      }
    }
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)',
      redirect: '/',
    },
    ...generateRoutes(),
  ],
})

export default router
