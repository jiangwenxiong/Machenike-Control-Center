<template>
  <div class="MagContant">
    <img class="com_machenike" src="~@/assets/img/side1/machenikeimg.png" />
    <div class="mg_tit">系统管理</div>
    <div class="mg_infoBox">
      <div class="mg_infoLeft">
        <div :class="modeIndex==1?'mg_iltit1':'mg_iltit2'" @click="modeIndex=1">工作模式</div>
        <div class="mg_radioBox">
          <div class="mg_radio" @click="workMode=1">
            <div class="mg_pieBox">
              <div class="mg_pie" v-show="workMode==1"></div>
            </div>标准
          </div>
          <div class="mg_radio" @click="workMode=2">
            <div class="mg_pieBox">
              <div class="mg_pie" v-show="workMode==2"></div>
            </div>节能
          </div>
        </div>
        <div :class="modeIndex==2?'mg_iltit1':'mg_iltit2'" @click="modeIndex=2">游戏模式</div>
        <div
          :class="modeIndex==3?'mg_iltit1 mg_longTit':'mg_iltit2 mg_longTit'"
          @click="modeIndex=3"
        >TURBO模式</div>
        <div class="mg_tit2">小提示：适用部分机型</div>
      </div>
      <div class="mg_infoMiddle">
        <img class="mg_fan" src="/static/img/fan.png" />
      </div>
      <div class="mg_infoRight">
        <div class="mg_irTop">
          <div class="mg_topTit">风扇转速</div>
          <div
            class="mg_secBox"
            @click="showSpeedList=!showSpeedList"
            @mouseleave="showSpeedList=false;"
          >
            {{speedName}}
            <ul class="mg_sec" v-show="showSpeedList">
              <li
                class="mg_speedItem"
                v-for="i,index in speedList"
                :class="index==1?'mg_speedItem2':''"
                @click="secSpeed(i)"
              >{{i.name}}</li>
            </ul>
            <div class="mg_down">
              <img class="mg_fan" src="~@/assets/img/side1/down.png" />
            </div>
          </div>
        </div>
        <div class="mg_speedMode">
          <div class="mg_pieBox" @click="speedMode=1;speedName='高速'">
            <div class="mg_pie" v-show="speedMode==1"></div>
          </div>
          <img class="mg_modeIcon" src="~@/assets/img/side1/1.png" />
          <img class="mg_modeIcon" src="~@/assets/img/side1/2.png" />
          <img class="mg_modeIcon" src="~@/assets/img/side1/3.png" />
        </div>
        <div class="mg_speedMode">
          <div class="mg_pieBox" @click="speedMode=2;speedName='中速'">
            <div class="mg_pie" v-show="speedMode==2"></div>
          </div>
          <img class="mg_modeIcon" src="~@/assets/img/side1/4.png" />
          <img class="mg_modeIcon" src="~@/assets/img/side1/5.png" />
          <img class="mg_modeIcon" src="~@/assets/img/side1/6.png" />
        </div>
        <div class="mg_speedMode">
          <div class="mg_pieBox" @click="speedMode=3;speedName='低速'">
            <div class="mg_pie" v-show="speedMode==3"></div>
          </div>
          <img class="mg_modeIcon" src="~@/assets/img/side1/7.png" />
          <img class="mg_modeIcon" src="~@/assets/img/side1/8.png" />
          <img class="mg_modeIcon" src="~@/assets/img/side1/9.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      workMode: 1,
      modeIndex: 1,
      speedMode: 1,
      showSpeedList: false,
      speedName: "高速",
      speedList: [
        {
          name: "高速",
          code: 1
        },
        {
          name: "中速",
          code: 2
        },
        {
          name: "低速",
          code: 3
        }
      ]
    };
  },
  mounted() {
    var that = this;
  },
  methods: {
    btnClick() {
      if (this.btnLeft == "-1px") {
        this.btnLeft = "17px";
      } else {
        this.btnLeft = "-1px";
      }
    },
    secSpeed(i) {
      var that = this;
      that.speedMode = i.code;
      that.speedName = i.name;
    }
  }
};
</script>

<style lang='stylus' scoped>
.MagContant {
  height 100%
  width 100%
  color #10a9fd
  overflow hidden
  padding-left 28px
  padding-top 30px
  .mg_tit {
    height 36px
    font-size 20px
    position relative
  }
  .mg_infoBox {
    height 450px
    width 100%
    display flex
    .mg_infoLeft {
      height 100%
      width 150px
      .mg_iltit1 {
        height 26px
        width 86px
        color #fff
        background #10a9fd
        font-size 14px
        line-height 26px
        text-align center
        margin-top 60px
        cursor pointer
      }
      .mg_iltit2 {
        height 26px
        width 86px
        color #10a9fd
        font-size 14px
        line-height 26px
        text-align center
        border 1px solid #10abff
        box-shadow inset 0px 0px 5px 1px #10abff
        margin-top 60px
        cursor pointer
      }
      .mg_longTit {
        width 106px
        margin-top 90px
      }
      .mg_tit2 {
        font-size 12px
      }
      .mg_radioBox {
        display flex
        height 20px
        width 100%
        margin-top 10px
        .mg_radio {
          flex 1
          font-size 12px
          padding-left 14px
          position relative
          cursor pointer
        }
      }
    }
    .mg_infoMiddle {
      height 100%
      width 348px
      margin-left 50px
      padding-top 30px
    }
    .mg_infoRight {
      flex 1
      padding-top 30px
      padding-left 50px
      .mg_irTop {
        height 26px
        width 100%
        display flex
        .mg_topTit {
          height 26px
          width 86px
          color #10a9fd
          font-size 14px
          line-height 26px
          text-align center
          border 1px solid #10abff
        }
        .mg_secBox {
          height 26px
          width 66px
          color #10a9fd
          font-size 14px
          line-height 26px
          text-align left
          padding-left 4px
          border 1px solid #10abff
          box-shadow inset 0px 0px 5px 1px #10abff
          cursor pointer
          margin-left 50px
          position relative
          .mg_sec {
            width 40px
            height 84px
            position absolute
            top 25px
            left -1px
            border 1px solid #10abff
            z-index 999
            box-shadow inset 0px 0px 5px 1px #10abff
            li {
              width 100%
              padding-left 4px
              &:hover {
                background #10abff
                color #fff
              }
            }
            .mg_speedItem2 {
              border-top 1px solid #10abff
              border-bottom 1px solid #10abff
            }
          }
          .mg_down {
            height 25px
            width 26px
            background #10abff
            position absolute
            top 0
            right 0
            padding-top 6px
            padding-left 7px
            img {
              height 12px
            }
          }
        }
      }
      .mg_speedMode {
        height 38px
        width 100%
        position relative
        margin-top 60px
        padding-left 10px
        img {
          margin-left 30px
        }
        .mg_pieBox {
          top 10px
        }
      }
    }
  }
  .mg_pieBox {
    width 12px
    height 12px
    border 1px solid #10abff
    border-radius 6px
    padding 1px
    position absolute
    top 2px
    left 0
    .mg_pie {
      height 8px
      width 8px
      border-radius 4px
      background #10abff
    }
  }
}
</style>