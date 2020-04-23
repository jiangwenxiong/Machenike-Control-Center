import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login'
import Index from '@/components/pages/index'
import Personal from '@/components/pages/personal'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: '机械师控制中心'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        title: '机械师控制中心'
      }
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        title: '机械师控制中心'
      }
    }
  ]
})

