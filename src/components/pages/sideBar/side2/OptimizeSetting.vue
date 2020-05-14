<template>
  <div class="optsContant">
    <div class="os_tit">设置</div>
    <div class="os_setItem">
      <div class="os_tips os_tips1">性能统计</div>
      <div class="os_switch" @click="btnClick(1)" :style="{'background':btnLeft>0?'#10abff':''}">
        <div class="os_switchBtn" :style="{'left':btnLeft+'px','background':btnLeft>0?'#fff':''}"></div>
      </div>小提示：关闭后，游戏结束不会生成性能报告，性能报告会在游戏启动10分钟后生成。
    </div>
    <div class="os_setItem">
      <div class="os_tips os_tips2">性能报告窗口弹出</div>
      <div class="os_switch" @click="btnClick(2)" :style="{'background':btnLeft2>0?'#10abff':''}">
        <div class="os_switchBtn" :style="{'left':btnLeft2+'px','background':btnLeft2>0?'#fff':''}"></div>
      </div>小提示：退出游戏后，不弹出性能报告窗口，报告保留在历史记录内
    </div>
     <div class="os_setItem">
      <div class="os_tips os_tips1">记录间隔</div>
      <div class="os_select" @click="showTime=true" @mouseleave="showTime=false">
          {{interval}}s
         <div class="os_down">
              <img class="os_downImg" src="~@/assets/img/side1/down.png" />
         </div>
         <ul class="os_time" v-show="showTime">
             <li class="os_timeItem"v-for="i in timeSelect"  @click="interval=i;showTime=false" >{{i}}s</li>
         </ul>
      </div>
    </div>
    <div class="os_setItem">
      <div class="os_tips os_tips2">自动改删除历史记录</div>
      <div class="os_switch" @click="btnClick(3)" :style="{'background':btnLeft3>0?'#10abff':''}">
        <div class="os_switchBtn" :style="{'left':btnLeft3+'px','background':btnLeft3>0?'#fff':''}"></div>
      </div>
    </div>
     <div class="os_setItem">
      <div class="os_tips os_tips1">保留最近</div>
     <div class="os_select" @click="showNum=true" @mouseleave="showNum=false">
          {{count}}条数据
         <div class="os_down">
              <img class="os_downImg" src="~@/assets/img/side1/down.png" />
         </div>
         <ul class="os_time" v-show="showNum">
             <li class="os_timeItem"v-for="i in countItem"  @click="count=i;showNum=false" >{{i}}条</li>
         </ul>
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
      btnLeft: "-1",
      btnLeft2: "-1",
      btnLeft3: "-1",
      interval:15,
      count:20,
      showTime:false,
      timeSelect:[
          15,20,30
      ],
      showNum:false,
      countItem:[
          20,30,50
      ],

    };
  },
  mounted() {
    var that = this;
  },
  methods: {
    btnClick(code) {
      switch (code) {
        case 1:
          if (this.btnLeft == "-1") {
            this.btnLeft = "16";
          } else {
            this.btnLeft = "-1";
          }
          break;

        case 2:
          if (this.btnLeft2 == "-1") {
            this.btnLeft2 = "16";
          } else {
            this.btnLeft2 = "-1";
          }
          break;
        case 3:
          if (this.btnLeft3 == "-1") {
            this.btnLeft3 = "16";
          } else {
            this.btnLeft3 = "-1";
          }
          break;
      }
    }
  }
};
</script>

<style lang='stylus' scoped>
.optsContant {
  height 100%
  width 100%
  color #10a9fd
  overflow hidden
  padding-top 20px
  padding-left 30px
  position relative
  .os_tit {
    height 38px
    width 78px
    background url('~@/assets/img/side2/stbg.png') no-repeat 100% 100%
    font-size 14px
    text-align center
    line-height 38px
  }
  .os_setItem {
    height 26px
    line-height 26px
    margin-top 20px
    display flex
    font-size 12px
    .os_select{
        height 26px;
        width 108px;
        margin-left 30px;
        border 1px solid #10abff
        line-height 26px;
        padding-left 10px;
        position relative;
        cursor pointer;
        .os_down{
            position absolute;
            top 0;
            right 0;
            height 24px;
            width 30px;
            background #10abff;
            padding-left 8px;
            padding-top 6px;
            img{
                height 12px;
            }
        }
        .os_time{
            height 78px;
            width 100%;
            position absolute;
            top 25px;
            left 0;
            border 1px solid #10abff
            background #050b24;
            z-index 100
            li{
                height 26px;
                width 100%;
                padding-left 10px;
                border-bottom 1px solid #10abff
            }
        }
    }
    .os_tips {
      height 26px
      width 78px
      text-align center
      box-shadow inset 0px 0px 5px 2px #10abff
      border 1px solid #10abff
    }
    .os_tips2 {
      width 138px
    }
    .os_switch {
      height 18px
      width 32px
      border 1px solid #10abff
      border-radius 16px
      cursor pointer
      position relative
      margin-top 4px
      margin-right 20px
      margin-left 20px
      .os_switchBtn {
        height 16px
        width 16px
        border-radius 16px
        background #10abff
        position absolute
        top 0
      }
    }
  }
}
</style>