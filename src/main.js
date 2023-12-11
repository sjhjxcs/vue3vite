import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router  from '@/router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from "element-plus/es/locale/lang/zh-cn";
// import zhCn from "element-plus/lib/locale/index";   //导入这个报错
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createPinia} from 'pinia'
import dir from '@/directive/dbclick.js'   //自定义指令


const pinia = createPinia()
const app  = createApp(App)

app.use(router).use(ElementPlus,{
  locale: zhCn
}).use(pinia)



 //防连点
app.directive('dbClick', dir.dbClick);

app.mount('#app')

  