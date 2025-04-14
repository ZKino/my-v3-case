import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'
import VxeUITable from 'vxe-table'
import ElementPlus from 'element-plus'

import 'reset.css'
import '@/assets/base.scss'
import 'vxe-table/lib/style.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(VxeUITable)
app.use(ElementPlus)

app.mount('#app')

console.log(app, 'app')
