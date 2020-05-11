import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login'                                              //登录页
import Index from '@/components/pages/index'                                              //登录首页
import Personal from '@/components/pages/personal'                                        //个人信息页  

//侧边栏1 硬件监控
import SideHardware from '@/components/pages/sideBar/side1/Hardware'                      //硬件监控
import SideDisktop from '@/components/pages/sideBar/side1/Disktop'                        //桌面监控

import SideGame from '@/components/pages/sideBar/side2Game'
import SideLight from '@/components/pages/sideBar/side3Light'
import SideDriver from '@/components/pages/sideBar/side4Driver'
import SideHardcore from '@/components/pages/sideBar/side5Hardcore'
import SideGather from '@/components/pages/sideBar/side6Gather'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: '机械师控制中心-登录'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        title: '机械师控制中心-首页'
      }
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        title: '机械师控制中心-个人信息'
      }
    },
    {
      path: '/hardware',
      name: 'SideHardware',
      component: SideHardware,
      meta: {
        title: '机械师控制中心-硬件监控'
      }
    },
    {
      path: '/disktop',
      name: 'SideDisktop',
      component: SideDisktop,
      meta: {
        title: '机械师控制中心-桌面监控'
      }
    },
    {
      path: '/gameacceleration',
      name: 'SideGame',
      component: SideGame,
      meta: {
        title: '机械师控制中心-游戏加速'
      }
    }
    ,
    {
      path: '/lightcontrol',
      name: 'SideLight',
      component: SideLight,
      meta: {
        title: '机械师控制中心-灯光控制'
      }
    }
    ,
    {
      path: '/officialdriver',
      name: 'SideDriver',
      component: SideDriver,
      meta: {
        title: '机械师控制中心-官方驱动'
      }
    }
    ,
    {
      path: '/hardcoresoftware',
      name: 'SideHardcore',
      component: SideHardcore,
      meta: {
        title: '机械师控制中心-硬核软件'
      }
    }
    ,
    {
      path: '/machenikergathe',
      name: 'SideGather',
      component: SideGather,
      meta: {
        title: '机械师控制中心-机友聚集地'
      }
    }
  ]
})

