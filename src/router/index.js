import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login' //登录页
import Register from '@/components/pages/register' //注册页
import Index from '@/components/pages/index' //登录首页
import Personal from '@/components/pages/personal' //个人信息页  
import Setting from '@/components/pages/setting' //设置 
import InstallPage from '@/components/common/Install' //安装
import Installing from '@/components/common/Installing' //安装中 
import Installed from '@/components/common/Installed' //安装完成 
import UnstallPage from '@/components/common/Unstall' //卸载
import Unstalling from '@/components/common/Unstalling' //安装中 
import Unstalled from '@/components/common/Unstalled' //安装完成 

//侧边栏1 硬件监控
import Side1Hardware from '@/components/pages/sideBar/side1/Hardware' //硬件监控
import Side1Disktop from '@/components/pages/sideBar/side1/Disktop' //桌面监控
import Side1InGame from '@/components/pages/sideBar/side1/Ingame' //系统管理
import Side1Management from '@/components/pages/sideBar/side1/Management' //系统管理

//侧边栏2 游戏加速
import Side2Optimization from '@/components/pages/sideBar/side2/Optimization' //性能优化
import Side2Setting from '@/components/pages/sideBar/side2/Setting' //设置
import Side2Optetting from '@/components/pages/sideBar/side2/OptimizeSetting' //优化设置
import Side2AllGame from '@/components/pages/sideBar/side2/AllGame' //所有游戏
import Side2Performance from '@/components/pages/sideBar/side2/Performance' //性能统计


//侧边栏4 官方驱动
import Side4Driver from '@/components/pages/sideBar/side4/Driver' //官方驱动
import Side4Update from '@/components/pages/sideBar/side4/Update' //官方驱动

//侧边栏5 硬核软件
import side5Hardcore from '@/components/pages/sideBar/side5/Hardcore' //硬核软件

import SideLight from '@/components/pages/sideBar/side3Light'
import SideGather from '@/components/pages/sideBar/side6Gather'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [{
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: '机械师控制中心-登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '机械师控制中心-注册'
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
      path: '/setting',
      name: 'Setting',
      component: Setting,
      meta: {
        title: '机械师控制中心-设置'
      }
    },
    {
      path: '/install',
      name: 'InstallPage',
      component: InstallPage,
      meta: {
        title: '机械师控制中心-安装向导'
      }
    },
    {
      path: '/installing',
      name: 'Installing',
      component: Installing,
      meta: {
        title: '机械师控制中心-安装中'
      }
    },
    {
      path: '/installed',
      name: 'Installed',
      component: Installed,
      meta: {
        title: '机械师控制中心-安装完成'
      }
    },
    {
      path: '/unstall',
      name: 'UnstallPage',
      component: UnstallPage,
      meta: {
        title: '机械师控制中心-安装完成'
      }
    },
    {
      path: '/unstalling',
      name: 'Unstalling',
      component: Unstalling,
      meta: {
        title: '机械师控制中心-安装完成'
      }
    },
    {
      path: '/unstalled',
      name: 'Unstalled',
      component: Unstalled,
      meta: {
        title: '机械师控制中心-安装完成'
      }
    },
    {
      path: '/hardware',
      name: 'Side1Hardware',
      component: Side1Hardware,
      meta: {
        title: '机械师控制中心-硬件监控'
      }
    },
    {
      path: '/disktop',
      name: 'Side1Disktop',
      component: Side1Disktop,
      meta: {
        title: '机械师控制中心-桌面监控'
      }
    },
    {
      path: '/ingame',
      name: 'Side1InGame',
      component: Side1InGame,
      meta: {
        title: '机械师控制中心-游戏监控'
      }
    },
    {
      path: '/management',
      name: 'Side1Management',
      component: Side1Management,
      meta: {
        title: '机械师控制中心-系统管理'
      }
    },
    {
      path: '/optimization',
      name: 'Side2Optimization',
      component: Side2Optimization,
      meta: {
        title: '机械师控制中心-性能优化'
      }
    },
    {
      path: '/gamesetting',
      name: 'Side2Setting',
      component: Side2Setting,
      meta: {
        title: '机械师控制中心-优化设置'
      }
    },
    {
      path: '/optimizeSetting',
      name: 'Side2Optetting',
      component: Side2Optetting,
      meta: {
        title: '机械师控制中心-设置'
      }
    },
    {
      path: '/allgame',
      name: 'Side2AllGame',
      component: Side2AllGame,
      meta: {
        title: '机械师控制中心-所有游戏'
      }
    },
    {
      path: '/performance',
      name: 'Side2Performance',
      component: Side2Performance,
      meta: {
        title: '机械师控制中心-性能统计'
      }
    },
    {
      path: '/lightcontrol',
      name: 'SideLight',
      component: SideLight,
      meta: {
        title: '机械师控制中心-灯光控制'
      }
    },
    {
      path: '/officialdriver',
      name: 'Side4Driver',
      component: Side4Driver,
      meta: {
        title: '机械师控制中心-官方驱动'
      }
    },
    {
      path: '/driverupdate',
      name: 'Side4Update',
      component: Side4Update,
      meta: {
        title: '机械师控制中心-官方驱动'
      }
    },
    {
      path: '/hardcoresoftware',
      name: 'side5Hardcore',
      component: side5Hardcore,
      meta: {
        title: '机械师控制中心-硬核软件'
      }
    },
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
