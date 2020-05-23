import Router from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: resolve => require(['views/login/index.vue'], resolve),
    name: 'login'
  }
]
const router = new Router({
  mode: 'hash',
  routes
})

export default router
