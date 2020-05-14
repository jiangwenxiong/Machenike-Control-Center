<template>
  <div class="topBar">
    <img class="topmid" src="/static/img/topmid.png" />
    <ul class="topmid topItemBox" v-show="topItems.length">
      <li
        class="topItem"
        v-for="item,index in topItems"
        @click="itemClick(index,item)"
        :class="index==activeIndex?'topItemActive':''"
        :style="{'padding-left':item.padding?item.padding:''}"
      >{{item.name}}</li>
    </ul>
    <img class="topleft" src="~@/assets/img/topbar/topleft.png" />
    <img class="topright" src="~@/assets/img/topbar/topright.png" />
    <div class="sysName">机械师控制中心&nbsp;V0.1</div>
    <ul class="topRbox">
      <li
        class="topRbtn settingsBtn"
        @mousemove="showsettingBox=true;"
        @mouseout="showsettingBox=false;"
      >
        <img class="settings" src="~@/assets/img/topbar/settings.png" />
        <div class="settingsBox" v-show="showsettingBox">
          <div class="settingCon">
            <div class="settingsItem" v-for="item in featureList" @click="setItemClick(item)">
              <img class="siIcon siIconB" :src="item.icon" />
              <img class="siIcon siIconW" :src="item.activeIcon" />
              {{item.name}}
            </div>
          </div>
        </div>
      </li>
      <li class="topRbtn">
        \
        <img class="minimize" src="~@/assets/img/topbar/minimize.png" />
      </li>
      <li class="topRbtn">
        \
        <img class="close" src="~@/assets/img/topbar/close.png" />
      </li>
    </ul>
  </div>
</template>

<script>
import Topmid from "@/assets/img/topbar/topmid.png";
import SetIcon1b from "@/assets/img/topbar/ssettingb.png";
import SetIcon1w from "@/assets/img/topbar/ssettingw.png";
import SetIcon2b from "@/assets/img/topbar/slogb.png";
import SetIcon2w from "@/assets/img/topbar/slogw.png";
import SetIcon3b from "@/assets/img/topbar/saboutb.png";
import SetIcon3w from "@/assets/img/topbar/saboutw.png";
import SetIcon4b from "@/assets/img/topbar/slogoutb.png";
import SetIcon4w from "@/assets/img/topbar/slogoutw.png";
import SetIcon5b from "@/assets/img/topbar/squitb.png";
import SetIcon5w from "@/assets/img/topbar/squitw.png";
import { mapGetters } from "vuex";
export default {
  name: "TopBar",
  data() {
    return {
      msg: "TopBar Mounted",
      showsettingBox: false,
      activeIndex: 0,
      featureList: [
        {
          name: "设置",
          icon: SetIcon1b,
          activeIcon: SetIcon1w,
          routeName: "Setting"
        },
        {
          name: "更新日志",
          icon: SetIcon2b,
          activeIcon: SetIcon2w,
          routeName: "Setting"
        },
        {
          name: "关于我们",
          icon: SetIcon3b,
          activeIcon: SetIcon3w,
          routeName: "Setting"
        },
        {
          name: "注销",
          icon: SetIcon4b,
          activeIcon: SetIcon4w,
          routeName: "Login"
        },
        {
          name: "退出",
          icon: SetIcon5b,
          activeIcon: SetIcon5w,
          routeName: "SideHardware"
        }
      ]
    };
  },
  computed: {
    topItems() {
      return this.$store.getters.getTopList;
    }
  },
  mounted() {
    var that = this;
    console.log(that.msg);
  },
  methods: {
    itemClick(index, item) {
      this.activeIndex = index;
      if (item.routerName) {
        this.$router.push({ name: item.routerName });
      }
    },
    setItemClick(item) {
      if (item.name == "注销") {
        this.$emit("show-logout", true);
        return false;
      }
      this.$router.push({ name: item.routeName });
      sessionStorage.removeItem("activeIndex");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.topBar {
  height 50px
  width 100%
  position relative
  /* overflow: hidden; */
}
.topBar img {
  display block
  height 100%
  width auto
  position absolute
  top 0
}
.topBar .topleft {
  left 0
}
.topBar .topItemBox {
  position absolute
  background #050b24
  padding-left 42px
  padding-top 6px
}
.topItem {
  display inline-block
  height 40px
  width 135px
  line-height 44px
  position relative
  font-size 12px
  padding-left 38px
  letter-spacing 2px
  color #10abff
  cursor pointer
  background url('~@/assets/img/base/topItem.png') no-repeat 100% 100%
}
.topItemActive {
  margin 0
  height 46px
  width 150px
  line-height 46px
  padding-left 42px
  background url('~@/assets/img/base/topItema.png') no-repeat 100% 100%
}
.topBar .topmid {
  left 186px
  height 52px
  width 724px
}
.topBar .topright {
  right 0
  height 61px
}
.sysName {
  height 100%
  font-size 12px
  line-height 50px
  letter-spacing 2px
  color #10abff
  position absolute
  top 0
  left 30px
}
.topRbox {
  height 50px
  width 160px
  display flex
  position absolute
  top 0
  right 10px
}
.topRbox li {
  flex 1
  position relative
  color #10abff
  line-height 50px
  cursor pointer
}
.topRbox li img {
  position absolute
  top 20px
  left 20px
  width 16px
  height auto
}
.topRbox li .minimize {
  top 24px
}
.settingsBox {
  width 104px
  height 150px
  position absolute
  left -20px
  top 36px
  z-index 1000
}
.settingCon {
  width 100%
  height 100%
  position relative
  background url('~@/assets/img/login/setbg.png') no-repeat 100% 100%
  padding-top 9px
}
.settingsItem {
  height 28px
  border-bottom 1px solid #10a9fd
  width 103px
  margin 0 auto
  position relative
  color #10a9fd
  line-height 28px
  font-size 12px
  padding-left 36px
  cursor pointer
}
.settingsItem .siIcon {
  height 12px
  width auto
  position absolute
  top 8px
  left 14px
}
.settingsItem:hover {
  color #fff
  box-shadow inset 0px 0px 5px 8px #072649
}
.settingsItem .siIconW {
  display none
}
.settingsItem:hover .siIconB {
  display none
}
.settingsItem:hover .siIconW {
  display block
}
.noBorder {
  border none
}
/* topBar end */
</style> 
