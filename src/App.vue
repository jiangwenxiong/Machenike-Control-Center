<template>
  <div id="app">
      <TopBar></TopBar>
     
      <div class="bottom">
          <SideBar></SideBar>
          <router-view class="view" />
      </div>  
      
  </div>
</template>

<script>
import TopBar from "@/components/common/topBar";
import SideBar from "@/components/common/sideBar";
import "./assets/css/base.css";
export default {
  name: "App",
  components: {
    TopBar,
    SideBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:700px;
  width:1080px;
  overflow: hidden;
  background: #050b24;
  position: relative;
}
.bottom{
    height: 650px;
    width: 100%;
    display: flex;
}
.view{
    flex: 1;
    height: 100%;
}
</style>
