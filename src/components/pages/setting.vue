<template>
  <div class="settingContant">
    <div class="sc_item">
      <div class="sc_tips">开机启动</div>
      <div class="sc_pieBox" @click="autoStart=!autoStart">
        <div class="sc_pie" v-show="autoStart"></div>
      </div>开机自动启动
    </div>
    <div class="sc_item">
      <div class="sc_tips">语言</div>
      <div class="os_select" @click="showTime=true" @mouseleave="showTime=false">
        {{language}}
        <div class="os_down">
          <img class="os_downImg" src="~@/assets/img/side1/down.png" />
        </div>
        <ul class="os_time" v-show="showTime">
          <li
            class="os_timeItem"
            v-for="i in languageList"
            @click="language=i;showTime=false"
          >{{i}}s</li>
        </ul>
      </div>
    </div>
    <div class="sc_item">
      <div class="sc_tips">更新设置</div>
      <div class="sc_pieBox" @click="updateMode=1">
        <div class="sc_pie" v-show="updateMode==1"></div>
      </div>启用自动更新
      <div class="sc_xx2">
          <div class="sc_con">
              <div class="sc_pieBox" @click="updateMode=2">
        <div class="sc_pie" v-show="updateMode==2"></div>
      </div>有新的更新时通知我
          </div>
      </div>
    </div>
    <div class="sc_item">
      <div class="sc_tips">窗口</div>
      <div class="sc_pieBox" @click="autoStart=!autoStart">
        <div class="sc_pie" v-show="autoStart"></div>
      </div>开启适应屏幕DPI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小提示：关闭选项后将保持默认大小，设置后需要重启软件才生效
    </div>
     <div class="sc_item sc_item2">
      <div class="sc_tips">更新日志</div>
      <ul class="sc_logBox">
          <li class="sc_log" v-for="i in logList">{{i.date}}&nbsp;&nbsp;&nbsp;{{i.itemName}}</li>
      </ul>
    </div>
     <div class="sc_item">
      <div class="sc_tips2">关于我们</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      autoStart: true,
      showTime: false,
      language: "简体中文",
      languageList: ["简体中文", "English"],
      updateMode:1,
      logList:[
         {
              itemName: "强制关闭Wallpaper Engnine",
              date: '2020.04.01'
            },
            {
              itemName: "强制关闭Wallpaper Engnine",
              date: '2020.03.29'
            },
            {
              itemName: "强制关闭Wallpaper Engnine",
              date: '2020.03.28'
            },
            {
              itemName: "强制关闭Wallpaper Engnine",
              date: '2020.03.26'
            }
      ]
    };
  },
  mounted() {
    var that = this;
  },
  methods: {}
};
</script>

<style lang='stylus' scoped>
.settingContant {
  height 100%
  width 100%
  color #10a9fd
  overflow hidden
  padding-top 50px
  padding-left 30px
  position relative
  .sc_item {
    height 30px
    font-size 12px
    position relative
    line-height 24px
    display flex
    margin-bottom 20px
    .sc_tips {
      height 24px
      width 78px
      box-shadow inset 0px 0px 5px 2px #10abff
      border 1px solid #10abff
      line-height 24px
      padding-left 14px
      margin-right 70px
    }
   
    .sc_xx2{
        position absolute;
        top 0;
        left 260px;
        .sc_con{
            position relative;
            padding-left 30px;
            .sc_pieBox{
                left 0;
            }
        }
    }
  }
  .sc_item2{
      height 74px;
      .sc_logBox{
          height 74px;
          width 234px;
          background #141a36;
          overflow-y auto;
          margin-left -26px
          li{
              line-height 12px;
          }
      }
  }
  .sc_pieBox {
    width 12px
    height 12px
    border 1px solid #10abff
    border-radius 6px
    padding 1px
    position absolute
    top 6px
    left 120px
    cursor pointer
    .sc_pie {
      height 8px
      width 8px
      border-radius 4px
      background #10abff
    }
  }
  .os_select {
    height 24px
    width 108px
    margin-left -26px
    border 1px solid #10abff
    line-height 26px
    padding-left 10px
    position relative
    cursor pointer
    .os_down {
      position absolute
      top 0
      right 0
      height 22px
      width 30px
      background #10abff
      padding-left 9px
      padding-top 6px
      img {
        height 12px
      }
    }
    .os_time {
      height 48px
      width 100%
      position absolute
      top 23px
      left 0
      border 1px solid #10abff
      background #050b24
      z-index 100
      li {
        height 24px
        width 100%
        padding-left 10px
        border-bottom 1px solid #10abff
      }
    }
  }
   .sc_tips2{
      height 24px
      width 78px
      line-height 24px
      padding-left 14px
      margin-right 70px
      color #fff;
      background #10a9fd;
    }
}
</style>