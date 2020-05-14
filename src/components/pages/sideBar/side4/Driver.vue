<template>
  <div class="driverContant">
    <div class="od_area">
      <div class="od_btn">驱动检测</div>
      <div class="od_tips">
        小提示：您的电脑中可能存在更高版本驱动，非机械师官方认证的驱动，
        <br />如果使用过程中出现任何问题，可通过更新驱动方式还原机械师官方认证驱动。
      </div>
      <img class="od_line" src="~@/assets/img/sidebar/line.png" />
    </div>
    <div class="od_topTips">
      <div class="od_tip">无需更新的驱动</div>
    </div>
    <div class="od_driverCon">
      <div class="od_area" v-for="i in driverList">
        <img class="od_itemIcon" :src="i.icon" />
        <div class="od_nameBox">
          <div class="od_name">{{i.name}}</div>
          <div class="od_model">{{i.model}}</div>
        </div>
        <div class="od_edition">当前版本:&nbsp;{{i.edition}}</div>
        <div class="od_state">{{i.state==1?'已最新':(i.state==2?'待更新':'高版本')}}</div>
        <img class="od_line" src="~@/assets/img/sidebar/line.png" />
      </div>
    </div>
    <div class="od_loadMask" v-show="showLoader">
      <div class="od_loadBox">
        <img class="od_loadImg" src="~@/assets/img/side4/s.png" />
        <div class="od_loadTip1">正在检测系统驱动...</div>
        <div class="od_loadBarbox">
          <div class="od_loadBar" :style="{'width':progress+'%'}"></div>
        </div>
        <div class="od_loadTip2">正在联网查询最适合您电脑硬件的驱动</div>
      </div>
      <img class="od_loadImg2" src="~@/assets/img/side4/l.png" />
      <div class="od_loadTip3">正在检测系统驱动，请稍后...</div>
    </div>
  </div>
</template>

<script>
import Icon1 from "@/assets/img/side4/1.png";
import Icon2 from "@/assets/img/side4/2.png";
import Icon3 from "@/assets/img/side4/3.png";
import Icon4 from "@/assets/img/side4/4.png";
import Icon5 from "@/assets/img/side4/5.png";
import Icon6 from "@/assets/img/side4/6.png";
export default {
  name: "",
  data() {
    return {
      msg: "",
      progress: 50,
      showLoader: true,
      driverList: [
        {
          name: "主板及芯片组",
          model: "InteI(R) SMBus - A323",
          edition: "10.1.16.6",
          state: 1,
          icon: Icon1
        },
        {
          name: "硬盘",
          model: "InteI(R) SMBus - A323",
          edition: "10.1.16.6",
          state: 2,
          icon: Icon2
        },
        {
          name: "显卡",
          model: "InteI(R) SMBus - A323",
          edition: "10.1.16.6",
          state: 3,
          icon: Icon3
        },
        {
          name: "网卡",
          model: "InteI(R) SMBus - A323",
          edition: "10.1.16.6",
          state: 1,
          icon: Icon4
        },
        {
          name: "蓝牙",
          model: "InteI(R) SMBus - A323",
          edition: "10.1.16.6",
          state: 1,
          icon: Icon5
        },
        {
          name: "照相机",
          model: "InteI(R) SMBus - A323",
          edition: "10.1.16.6",
          state: 1,
          icon: Icon6
        }
      ]
    };
  },
  mounted() {
    var that = this;
    var t = setInterval(() => {
      if (that.progress < 100) {
        that.progress += 1;
      } else {
        that.showLoader = false;
        clearInterval(t);
      }
    }, 100);
  },
  methods: {}
};
</script>

<style lang='stylus' scoped>
.driverContant {
  height 100%
  width 100%
  color #10a9fd
  overflow hidden
  padding-top 30px
  padding-left 50px
  position relative
  .od_loadMask {
    height 100%
    width 100%
    color #10a9fd
    overflow hidden
    background #050b24
    position absolute
    top 0
    left 0
    .od_loadImg2 {
      position absolute
      top 260px
      left 50%
      margin-left -90px
    }
    .od_loadBox {
      height 82px
      padding-left 50px
      margin-top 50px
      position relative
      .od_loadTip1 {
        font-size 14px
        position absolute
        top 10px
        left 180px
      }
      .od_loadTip2 {
        font-size 12px
        position absolute
        top 56px
        left 180px
      }
      .od_loadBarbox {
        width 646px
        height 18px
        background-color #141a36
        border-radius 9px
        position absolute
        top 34px
        left 180px
        overflow hidden
        .od_loadBar {
          height 18px
          background linear-gradient(to right, #0962db 0%, #62fff2 100%)
          border-radius 9px
        }
      }
    }
  }
  .od_area {
    height 70px
    position relative
  }
  .od_line {
    height 2px
    width 100%
    position absolute
    bottom 0
    left 0
  }
  .od_btn {
    height 38px
    width 106px
    text-align center
    color #fff
    line-height 38px
    background #10a9fd
    border-radius 19px
    cursor pointer
    display inline-block
  }
  .od_tips {
    height 38px
    font-size 12px
    display inline-block
    margin-left 20px
    position absolute
    top 6px
  }
  .od_driverCon {
    width 100%
    height 520px
    overflow-y auto
    padding-top 10px
    .od_area {
      padding-top 20px
      .od_itemIcon {
        height 26px
      }
      .od_nameBox {
        position absolute
        top 18px
        left 60px
        font-size 12px
        .od_name {
          font-weight 600
        }
        .od_model {
          opacity 0.5
        }
      }
      .od_edition {
        width 150px
        height 26px
        border solid 1px #10a9fd
        opacity 0.5
        text-align center
        line-height 26px
        font-size 12px
        position absolute
        top 20px
        left 350px
      }
    }
  }
  .od_topTips {
    height 30px
    position relative
    margin-top 20px
    .od_tip {
      height 26px
      width 114px
      line-height 26px
      text-align center
      font-size 12px
      box-shadow inset 0px 0px 5px 2px #10abff
      border 1px solid #10abff
    }
  }
  .od_state {
    width 48px
    height 26px
    text-align center
    line-height 26px
    font-size 12px
    box-shadow inset 0px 0px 5px 2px #10abff
    border 1px solid #10abff
    position absolute
    top 20px
    right 60px
  }
  .od_loadTip3 {
    font-size 14px
    position absolute
    top 430px
    left 360px
  }
}
</style>