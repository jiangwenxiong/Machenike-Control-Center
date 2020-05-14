<template>
  <div class="gameSetContant">
    <img class="gs_bg" src="/static/img/setbg.png" />
    <div class="gs_infoBox">
      <div class="gs_back" @click="$router.push({ name: 'Side2Optimization' })">
        <img class="gs_backIcon" src="~@/assets/img/side2/back.png" />
        返回
      </div>
      <div class="gs_tips">小提示：设置完毕后选择对应游戏，点击一键加速即可生效</div>
      <div class="gs_infoCon">
        <ul class="gs_setBox" v-for="i in setList">
          <li class="gs_setName">{{i.setName}}</li>
          <li class="gs_setItem" v-for="item in i.setItem" @click="check(item)">
            <div class="mg_pieBox">
              <div class="mg_pie" v-show="item.checked"></div>
            </div>
            {{item.itemName}}
          </li>
        </ul>
      </div>
      <div class="gs_fail"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      setList: [
        {
          setName: "Windows优化",
          setItem: [
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: false
            },
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: true
            },
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: true
            },
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: true
            }
          ]
        },
        {
          setName: "游戏设置",
          setItem: [
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: false
            },
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: true
            },
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: true
            },
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: true
            }
          ]
        }
      ]
    };
  },
  mounted() {
    var that = this;
  },
  methods: {
    check(i) {
      i.checked = !i.checked;
    }
  }
};
</script>

<style lang='stylus' scoped>
.gameSetContant {
  height 100%
  width 100%
  color #10a9fd
  overflow hidden
  position relative
  .gs_bg {
    width 100%
  }
  .gs_tips {
    font-size 12px
  }
  .gs_infoBox {
    height 100%
    width 100%
    position absolute
    padding-top 20px
    padding-left 30px
    top 0
    left 0
    .gs_back {
      height 38px
      width 100px
      font-size 14px
      line-height 38px
      text-align center
      border-radius 19px
      border solid 1px #10abff
      box-shadow inset 0px 0px 5px 2px #10abff
      position relative
      cursor pointer
      margin-bottom 6px
      .gs_backIcon {
        height 12px
        position absolute
        top 13px
        left 18px
      }
    }
  }
  .gs_infoCon {
    width 100%
    height 570px
    padding-top 10px
    overflow-y auto
    .gs_setBox {
      width 90%
      padding-bottom 10px
      margin-top 20px
      border-bottom 1px solid #10abff
      .gs_setName {
        height 34px
        width 100px
        line-height 34px
        text-align center
        border solid 1px #10aafd
        box-shadow inset 0px 0px 5px 2px #10abff
        font-size 12px
        margin-bottom 10px
      }
      .gs_setItem {
        font-size 12px
        height 34px
        line-height 34px
        position relative
        padding-left 26px
        cursor pointer
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
    top 12px
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