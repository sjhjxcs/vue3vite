import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login/index.vue")
  }

]

const router = createRouter({
  history: createWebHistory('/'),
  // history: createWebHistory(!qiankunWindow.__POWERED_BY_QIANKUN__ ? "/travelRecorderPlatform/" : "/yk_operation_platform/travelRecorderPlatform"),
  routes
});


export default router
