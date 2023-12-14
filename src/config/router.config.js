/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "user" */ '@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '/',
    redirect: '/login' // 将根路径重定向到登录页面
  }
]