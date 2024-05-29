import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'
import VxeUITable from 'vxe-table'

import 'reset.css'
import '@/assets/base.scss'
import 'vxe-table/lib/style.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(VxeUITable)

app.mount('#app')

console.log(app, 'app')
