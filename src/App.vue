<template>
  <div id="app">
      <div class="app_top">
         <TopBar></TopBar>
      </div> 
      <div class="app_bottom">
        <div class="app_sideBox">
          <SideBar></SideBar>
        </div>
        <router-view class="app_routerView" />
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
  text-align: center;
  color: #2c3e50;
  height:100%;
  width:100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.app_top{
  height:100px;
  background: #050b25;
}
.app_bottom{
  flex: 1;
  display: flex;
}
.app_sideBox{
  height:100%;
  width:200px;
  background: #050b25;
}
.app_routerView{
  flex:1;
  height:100%;
}

</style>
