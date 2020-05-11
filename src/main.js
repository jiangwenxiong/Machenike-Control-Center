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
  switch (to.name) {
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
          routerName:'Login'
        },
      ]);
      break;
      case 'SideHardware':
        store.commit("setTopList", [{
            name: '硬件监控'
          },
          {
            name: '桌面监控',
          },
          {
            name: '系统管理',
          },
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
