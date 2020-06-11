// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Es6Promise from 'es6-promise'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Es6Promise.polyfill()


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  document.title = to.meta.title || '机械师控制中心';
  console.log(to.name);
  store.commit("setTopList", []);
  var toName = to.name;
  if (toName.indexOf("Side1") != -1) {
    toName = 'Side1';
  } else if (toName.indexOf("Side2") != -1) {
    toName = 'Side2';
  }

  switch (toName) {
    case 'Index':
      store.commit("setTopList", [{
        name: '个人信息'
      }]);
      break;
    case 'Personal':
      store.commit("setTopList", [{
          name: '个人信息'
        },
        {
          name: '个人设置',
          routerName: 'Login'
        },
      ]);
      break;
    case 'Setting':
      store.commit("setTopList", [{
        name: '设置',
        padding: '55px'
      }]);
      break;
    case 'Side1':
      store.commit("setTopList", [{
          name: '硬件监控',
          routerName: 'Side1Hardware'
        },
        {
          name: '桌面监控',
          routerName: 'Side1Disktop'
        },
        {
          name: '游戏监控',
          routerName: 'Side1InGame'
        },
        {
          name: '系统管理',
          routerName: 'Side1Management'
        },
      ]);
      break;
    case 'Side2':
      store.commit("setTopList", [{
          name: '我的游戏',
          routerName: 'Side2Optimization'
        },
        {
          name: '所有游戏',
          routerName: 'Side2AllGame',
        },
        {
          name: '性能统计',
          routerName: 'Side2Performance',
        },
        {
          name: '设置',
          routerName: 'Side2Optetting',
          padding:'50px'
        }
      ]);
      break;
    case 'Side4Driver':
      store.commit("setTopList", [{
          name: '官方驱动',
        }

      ]);
      break;
      case 'side5Hardcore':
      store.commit("setTopList", [{
          name: '硬核软件',
        }

      ]);
      break;

    default:
      break;
  }
  next();
  console.log(store.state.topBarItems);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store
})
