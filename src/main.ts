import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

import 'reset.css'
import '@/assets/base.scss'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')

console.log(app, 'app')
