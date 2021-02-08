import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('./components/HelloWorld.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
