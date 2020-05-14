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
            <img class="baseTh" src="~@/assets/img/login/th.png" />确定注销吗？
          </div>
          <div class="logBtn">确定</div>
          <div class="logBtn logBtn2" @click="showLogout=false">取消</div>
        </div>
      </div>
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
      showLogout: false
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
  z-index: 99999;
}
.logoutCon {
  width: 342px;
  height: 134px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -67px;
  margin-left: -78 px;
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
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  position: absolute;
  bottom: 14px;
  left: 80px;
  border: 1px solid #10a9fd;
  box-shadow: inset 0px 0px 5px 2px #10abff;
  cursor: pointer;
}
.logBtn2 {
  left: 200px;
  background: #10a9fd;
  color: #fff;
}
</style>
