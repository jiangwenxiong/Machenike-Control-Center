<template>
   <div class="sideBar">
                <img class="sideBg" src="/static/img/sideBg.png" />
                <ul class="sideBox">
                    <li class="loginCon">
                        <img class="loginIcon" src="../../assets/img/sidebar/loginicon.png" />
                        <div class="loginTit">
                            <span class="loginCN">登&nbsp;&nbsp;录</span><br>
                            <span class="loginEN">SIGN&nbsp;IN</span>
                        </div>
                        <img class="line lineLong" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem" @click="itemClick(1)">
                        <img class="sideActive" v-show="activeIndex == 1" src="../../assets/img/base/sideActive.png" />
                        <img class="icon" v-show="activeIndex != 1" src="../../assets/img/sidebar/sideicon1.png" />
                        <img class="icon icon2" v-show="activeIndex == 1" src="../../assets/img/sidebar/sideicon1a.png" />
                        <div class="itemName" :style="{'color':activeIndex == 1 ? '#fff':''}">硬件监控</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem" @click="itemClick(2)">
                        <img class="sideActive" v-show="activeIndex == 2" src="../../assets/img/base/sideActive.png" />
                        <img class="icon" v-show="activeIndex != 2" src="../../assets/img/sidebar/sideicon2.png" />
                        <img class="icon icon2" v-show="activeIndex == 2" src="../../assets/img/sidebar/sideicon2a.png" />
                        <div class="itemName" :style="{'color':activeIndex == 2 ? '#fff':''}">游戏加速</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem" @click="itemClick(3)">
                        <img class="sideActive" v-show="activeIndex == 3" src="../../assets/img/base/sideActive.png" />
                        <img class="icon" v-show="activeIndex != 3" src="../../assets/img/sidebar/sideicon3.png" />
                        <img class="icon icon2" v-show="activeIndex == 3" src="../../assets/img/sidebar/sideicon3a.png" />
                        <div class="itemName" :style="{'color':activeIndex == 3 ? '#fff':''}">灯光控制</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem" @click="itemClick(4)">
                        <img class="sideActive" v-show="activeIndex == 4" src="../../assets/img/base/sideActive.png" />
                        <img class="icon" v-show="activeIndex != 4" src="../../assets/img/sidebar/sideicon4.png" />
                        <img class="icon icon2" v-show="activeIndex == 4" src="../../assets/img/sidebar/sideicon4a.png" />
                        <div class="itemName" :style="{'color':activeIndex == 4 ? '#fff':''}">官方驱动</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem" @click="itemClick(5)">
                        <img class="sideActive" v-show="activeIndex == 5" src="../../assets/img/base/sideActive.png" />
                        <img class="icon" v-show="activeIndex != 5" src="../../assets/img/sidebar/sideicon5.png" />
                        <img class="icon icon2" v-show="activeIndex == 5" src="../../assets/img/sidebar/sideicon5a.png" />
                        <div class="itemName" :style="{'color':activeIndex == 5 ? '#fff':''}">硬核软件</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem" @click="itemClick(6)">
                        <img class="sideActive" v-show="activeIndex == 6" src="../../assets/img/base/sideActive.png" />
                        <img class="icon" v-show="activeIndex != 6" src="../../assets/img/sidebar/sideicon6.png" />
                        <img class="icon icon2" v-show="activeIndex == 6" src="../../assets/img/sidebar/sideicon6a.png" />
                        <div class="itemName" :style="{'color':activeIndex == 6 ? '#fff':''}">机友聚集地</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                </ul>
            </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      msg: 'SideBar Mounted',
      activeIndex:0,
    }
  },
  mounted (){
    var that = this;
    console.log(that.msg)
    var activeIndex = sessionStorage.getItem('activeIndex');
    if(activeIndex){
        that.activeIndex = activeIndex;
    }
  },
  methods:{
    itemClick(index){
        this.activeIndex = index;
        sessionStorage.setItem('activeIndex',index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
/* sideBar start */
.sideBar{
    width: 188px;
    height: 100%;
    position: relative;
}
.sideBg{
    width: 100%;
}
.sideBox{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.sideBox li{
    position: relative;
    height:54px;
    color: #10abff;
    font-size: 12px;
    cursor: pointer;
}
.sideBox .loginCon{
    height: 86px;
}
.sideBox .loginCon .loginIcon{
    height: 48px;
    position: absolute;
    top: 16px;
    left: 30px;
}
.sideBox .loginCon .loginTit{
    height: 40px;
    width: 100px;
    color: #10abff;
    position: absolute;
    top: 22px;
    left: 100px;
}
.loginCN{
    font-size: 18px;
}
.loginEN{
    font-size: 12px;
}
.line{
    position: absolute;
    bottom: 0;
    left: 36px;
}
.lineLong{
    width:130px;
    left: 30px;
}
.sideItem .icon{
    height: 24px;
    position: absolute;
    top:15px;
    left: 50px;

}
.sideItem .icon2{
    height: 34px;
    position: absolute;
    top:10px;
    left: 40px;

}
.sideActive{
    height 62px;
    width 176px
    position: absolute;
    top:-4px;
    left: 0;
}
.itemName{
    position: absolute;
    top:18px;
    left:84px;
}

/* sideBar start */

</style> 
