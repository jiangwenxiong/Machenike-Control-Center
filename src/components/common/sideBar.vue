<template>
  <div class="sideBar">
    <img class="sideBg" src="/static/img/sideBg.png" />
    <ul class="sideBox">
      <li class="loginCon">
        <img class="loginIcon" src="~@/assets/img/sidebar/loginicon.png" />
        <div class="loginTit">
          <span class="loginCN">登&nbsp;&nbsp;录</span>
          <br />
          <span class="loginEN">SIGN&nbsp;IN</span>
        </div>
        <img class="line lineLong" src="~@/assets/img/sidebar/line.png" />
      </li>
      <li class="sideItem" v-for="item,index in sideBarList" @click="itemClick(index,item)">
        <img
          class="sideActive"
          v-show="activeIndex == index"
          src="~@/assets/img/base/sideActive.png"
        />
        <img class="icon" v-show="activeIndex != index" :src="item.icon" />
        <img class="icon icon2" v-show="activeIndex == index" :src="item.activeIcon" />
        <div class="itemName" :style="{'color':activeIndex == index ? '#fff':''}">{{item.name}}</div>
        <img class="line" src="~@/assets/img/sidebar/line.png" />
      </li>
    </ul>
  </div>
</template>

<script>
import sideIcon1 from "@/assets/img/sidebar/sideicon1.png";
import sideIcon1a from "@/assets/img/sidebar/sideicon1a.png";
import sideIcon2 from "@/assets/img/sidebar/sideicon2.png";
import sideIcon2a from "@/assets/img/sidebar/sideicon2a.png";
import sideIcon3 from "@/assets/img/sidebar/sideicon3.png";
import sideIcon3a from "@/assets/img/sidebar/sideicon3a.png";
import sideIcon4 from "@/assets/img/sidebar/sideicon4.png";
import sideIcon4a from "@/assets/img/sidebar/sideicon4a.png";
import sideIcon5 from "@/assets/img/sidebar/sideicon5.png";
import sideIcon5a from "@/assets/img/sidebar/sideicon5a.png";
import sideIcon6 from "@/assets/img/sidebar/sideicon6.png";
import sideIcon6a from "@/assets/img/sidebar/sideicon6a.png";
export default {
  name: "SideBar",
  data() {
    return {
      msg: "SideBar Mounted",
      activeIndex: 0,
      sideBarList: [
        {
          name: "硬件监控",
          icon: sideIcon1,
          activeIcon: sideIcon1a,
          routeName: "Side1Hardware"
        },
        {
          name: "游戏加速",
          icon: sideIcon2,
          activeIcon: sideIcon2a,
          routeName: "Side2Optimization"
        },
        {
          name: "灯光控制",
          icon: sideIcon3,
          activeIcon: sideIcon3a,
          routeName: "SideLight"
        },
        {
          name: "官方驱动",
          icon: sideIcon4,
          activeIcon: sideIcon4a,
          routeName: "Side4Driver"
        },
        {
          name: "硬核软件",
          icon: sideIcon5,
          activeIcon: sideIcon5a,
          routeName: "side5Hardcore"
        },
        {
          name: "机友聚集地",
          icon: sideIcon6,
          activeIcon: sideIcon6a,
          routeName: "SideGather"
        }
      ] 
    };
  },
  mounted() {
    var that = this;
    console.log(that.msg);
    var activeIndex = sessionStorage.getItem("activeIndex");
    if (activeIndex) {
      that.activeIndex = activeIndex;
    }
  },
  methods: {
    itemClick(index, item) {
      var activeIndex = sessionStorage.getItem("activeIndex");
      if (index != activeIndex) {
        this.activeIndex = index;
        sessionStorage.setItem("activeIndex", index);
        if (item.routeName) this.$router.push({ name: item.routeName });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
/* sideBar start */
.sideBar {
  width 188px
  height 100%
  position relative
}
.sideBg {
  width 100%
}
.sideBox {
  height 100%
  width 100%
  position absolute
  top 0
  left 0
}
.sideBox li {
  position relative
  height 54px
  color #10abff
  font-size 12px
  cursor pointer
}
.sideBox .loginCon {
  height 86px
}
.sideBox .loginCon .loginIcon {
  height 48px
  position absolute
  top 16px
  left 30px
}
.sideBox .loginCon .loginTit {
  height 40px
  width 100px
  color #10abff
  position absolute
  top 22px
  left 100px
}
.loginCN {
  font-size 18px
}
.loginEN {
  font-size 12px
}
.line {
  position absolute
  bottom 0
  left 36px
}
.lineLong {
  width 130px
  left 30px
}
.sideItem .icon {
  height 24px
  position absolute
  top 15px
  left 50px
}
.sideItem .icon2 {
  height 34px
  position absolute
  top 10px
  left 40px
}
.sideActive {
  height 62px
  width 176px
  position absolute
  top -4px
  left 0
}
.itemName {
  position absolute
  top 18px
  left 84px
}
/* sideBar start */
</style> 
