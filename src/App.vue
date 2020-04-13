<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
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
  background: #000;
}
</style>
