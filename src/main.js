import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import moment from 'moment'
import 'element-plus/dist/index.css'
createApp(App).use(store).use(router).use(ElementPlus).use(moment).mount('#app')
