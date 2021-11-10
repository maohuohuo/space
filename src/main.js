import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/global.css'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
// import 'element-plus/lib/theme-chalk/index.css'
import router from './router'
// import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from 'axios'
//axios全局配置
const app=createApp(App)
app.config.globalProperties.$http=axios

app.use(ElementPlus, { locale, size: 'medium' })
app.use(router)
app.mount('#app')