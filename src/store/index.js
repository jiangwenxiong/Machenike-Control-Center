import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        topBarItems:[]
    },
    getters:{
        getTopList(state){
            return state.topBarItems;
        }
    },
    mutations:{
        setTopList(state,data){
            sessionStorage.setItem('toplist', JSON.stringify(data));
            state.topBarItems = data;
        }
    }
})

export default store