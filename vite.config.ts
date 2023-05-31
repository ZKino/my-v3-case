import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteMockServe({
      localEnabled: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/apiTest': {
        target: 'http://192.168.10.6:3000', // 代理的线上的接口地址
        // secure: false, // 接受运行在https上，默认不接受
        // ws: true, // 如果要代理 websockets
        changeOrigin: true,
        rewrite: path => path.replace(/^\/apiTest/, ''), // 重写路径，这种是没有我们定义的前缀
      },
    },
  },
})
