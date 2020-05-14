<template>
  <div class="optConatant">
    <div class="op_tit">优化游戏性能&nbsp;&nbsp;&nbsp;&nbsp;提升游戏体验</div>
    <div class="op_setting" @click="$router.push({ name: 'Side2Setting' })">优化设置</div>
    <!-- <img class="hw_chartBg" src="~@/assets/img/side2/bg.png" /> -->
    <ul class="op_gameList">
      <li class="op_gameItem" v-for="i in gameList">
        <img class="op_gameImg" src="/static/img/game.jpg" />
        <div class="op_btnArea">
          一键优化
          <div class="op_settingArea" @click="$router.push({ name: 'Side2Setting' })">
            <img class="op_setIcon" src="~@/assets/img/side2/setting.png" />
          </div>
        </div>
        <div class="op_mask">
          <img class="op_flash" src="~@/assets/img/side2/f.png" />
          <div class="op_hover">一键优化</div>
        </div>
      </li>
    </ul>
    <div class="op_fail" v-show="loadState">
      <img class="op_failImg" src="/static/img/fail.png" />
      <div class="op_reLink">重新连接</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      gameList: [],
      loadState: false
    };
  },
  mounted() {
    var that = this;
    for (let index = 0; index < 50; index++) {
      const element = { game: index };
      that.gameList.push(element);
    }
  },
  methods: {}
};
</script>

<style lang='stylus' scoped>
.optConatant {
  height 100%
  width 100%
  color #10a9fd
  overflow hidden
  padding-top 20px
  padding-left 30px
  position relative
  .op_fail {
    height 100%
    width 100%
    position absolute
    top 0
    left 0
    background #050b24
    .op_failImg {
      position absolute
      top 120px
      left 50%
      margin-left -150px
    }
    .op_reLink {
      width 106px
      height 36px
      background-color #0faafd
      border-radius 2px
      color #fff
      font-size 14px
      line-height 36px
      text-align center
      position absolute
      top 450px
      left 50%
      margin-left -53px
    }
  }
  .op_tit {
    height 50px
    width 328px
    background url('~@/assets/img/side2/bg.png') no-repeat 100% 100%
    text-align center
    line-height 50px
    font-size 18px
  }
  .op_setting {
    width 60px
    height 20px
    background-color #10aafd
    color #fff
    font-size 12px
    text-align center
    line-height 20px
    position absolute
    top 40px
    right 50px
    cursor pointer
  }
  .op_gameList {
    width 100%
    height 550px
    margin-top 10px
    overflow-y auto
    .op_gameItem {
      width 144px
      height 186px
      border-radius 12px
      margin-right 24px
      margin-top 20px
      display inline-block
      overflow hidden
      position relative
      cursor pointer
      &:hover {
        .op_mask {
          display block
        }
      }
      .op_gameImg {
        width 100%
      }
      .op_mask {
        position absolute
        top 0
        left 0
        height 100%
        width 100%
        background rgba(0, 0, 0, 0.5)
        display none
        .op_hover {
          height 30px
          width 100%
          position absolute
          bottom 0
          left 0
          background #10abff
          text-align center
          color #fff
          line-height 30px
          font-size 12px
        }
        .op_flash {
          position absolute
          left 50%
          top 70px
          margin-left -10px
        }
      }
      .op_btnArea {
        width 100%
        height 30px
        line-height 30px
        text-align left
        background #050b24
        font-size 12px
        padding-left 30px
        position absolute
        color #fff
        left 0
        bottom 0
        box-shadow inset 0px 0px 5px 2px #10abff
        border-bottom-left-radius 12px
        cursor pointer
        .op_settingArea {
          height 100%
          width 30px
          position absolute
          bottom 0
          right 0
          background #10aafd
          img {
            margin-top 8px
            margin-left 6px
          }
        }
      }
    }
  }
}
</style>