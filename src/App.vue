<template>
  <div id="app">
    <TopBar @show-logout="showLogMask"></TopBar>

    <div class="bottom">
      <SideBar></SideBar>
      <router-view class="view" />
    </div>
    <div class="logoutMask" v-show="showLogout">
      <div class="logoutCon">
        <div class="logTitle">
          温馨提示
          <img class="baseClose" @click="showLogout=false" src="~@/assets/img/login/close.png" />
        </div>
        <div class="logContant">
          <div class="logtips">
            <img class="baseTh" src="~@/assets/img/login/th.png" />请选择关闭操作
          </div>
          <div class="logBtn">最小化程序</div>
          <div class="logBtn logBtn2" @click="showLogout=false">退出程序</div>
           
        </div>
        <div class="rember"  @click="isRember=!isRember"> <img class="ins_check" v-show="isRember" src="~@/assets/img/install/check.png"/></div>
          <div class="remberTs"  @click="isRember=!isRember">不再提示</div>
      </div>
    </div>
    <div class="installMask">
       
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/common/topBar";
import SideBar from "@/components/common/sideBar";
import "./assets/css/base.css";
import "./assets/css/common.styl";
export default {
  name: "App",
  data() {
    return {
      showLogout: false,
      isRember:false
    };
  },
  components: {
    TopBar, 
    SideBar
  },
  methods: {
    showLogMask(data) {
      this.showLogout = data;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 700px;
  width: 1080px;
  overflow: hidden;
  background: #050b24;
  position: relative;
}
.bottom {
  height: 650px;
  width: 100%;
  display: flex;
}
.view {
  flex: 1;
  height: 100%;
}
.logoutMask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,.5);
  z-index: 99999;
}
.logoutCon {
  width: 342px;
  height: 164px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -87px;
  margin-left: -90px;
  background: #050b24;
  font-size: 12px;
  color: #10a9fd;
}
.logTitle {
  height: 40px;
  width: 100%;
  background: #141a36;
  line-height: 40px;
  padding-left: 16px;
}
.baseClose {
  position: absolute;
  top: 12px;
  right: 18px;
}
.baseTh {
  position: absolute;
  top: 4px;
  left: 120px;
}
.logContant {
  width: 100%;
  height: 94px;
  position: relative;
  overflow: hidden;
}
.logtips {
  height: 20px;
  margin-top: 26px;
  padding-left: 140px;
  position: relative;
}
.logBtn {
  width: 100px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  position: absolute;
  bottom: 4px;
  left: 50px;
  border: 1px solid #10a9fd;
  box-shadow: inset 0px 0px 5px 2px #10abff;
  cursor: pointer;
}
.logBtn2 {
  left: 190px;
  background: #10a9fd;
  color: #fff;
}
 .rember{
      position:absolute;
      height:10px;
      width: 10px;
      border: 1px solid #10a9fd;
      border-radius: 10px;
      bottom: 8px;
      left: 10px;
      cursor: pointer
    }
    .ins_check{
        width: 6px;
        margin-top: 2px;
        margin-left: 1px;
        cursor: pointer
      }
    .remberTs{
      position: absolute;
      bottom: 6px;
      left: 24px;
      cursor: pointer
    }
</style>
