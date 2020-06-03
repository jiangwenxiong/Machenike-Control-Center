<template>
  <div class="diskContant">
    <img class="com_machenike" src="~@/assets/img/side1/machenikeimg.png" />
    <div class="dk_tit">
      游戏内监控
      <div class="dk_btnBox" @click="btnClick" :style="{'background':btnLeft>0?'#10a9fd':''}">
        <div class="dk_con">
          <div class="dk_btn" :style="{'left':btnLeft+'px','background':btnLeft>0?'#fff':''}"></div>
        </div>
      </div>
      <div class="ig_ts">小提示：功能仅在游戏中生效</div>
    </div>
    <div class="ig_contant">
        <div class="ig_con ig_conLeft">
            <div class="ig_tips"></div>
        </div>
        <div class="ig_con ig_conRight"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      btnLeft: -1,
      btnLeft2: 13,
      elseSetting: true,
      displayMode: [
        {
          name: "默认",
          chacked: true
        },
        {
          name: "科技",
          chacked: false
        },
        {
          name: "简约",
          chacked: false
        }
      ],
      monitor: [
        {
          name: "处理器",
          chacked: true
        },
        {
          name: "显卡",
          chacked: false
        },
        {
          name: "内存",
          chacked: false
        },
        {
          name: "显存",
          chacked: true
        },
        {
          name: "网络",
          chacked: false
        }
      ]
    };
  },
  mounted() {
    var that = this;
  },
  methods: {
    btnClick() {
      if (this.btnLeft == "-1") {
        this.btnLeft = "17";
      } else {
        this.btnLeft = "-1";
      }
    },
    btnClick2() {
      if (this.btnLeft2 == "-1") {
        this.btnLeft2 = "13";
      } else {
        this.btnLeft2 = "-1";
      }
    },
    chackDispaly(index) {
      this.displayMode.forEach(item => {
        item.chacked = false;
      });
      this.displayMode[index].chacked = true;
    }
  }
};
</script>

<style lang='stylus' scoped>
.diskContant {
  height 100%
  width 100%
  color #10a9fd
  overflow hidden
  padding-left 28px
  padding-top 30px
  position relative
  .dk_tit {
    height 36px
    font-size 20px
    position relative
    .ig_ts{
        font-size 12px;
        position absolute;
        top 4px;
        left 180px;
    }
  }
  .dk_btnBox {
    height 16px
    width 32px
    border 1px solid #10a9fd
    border-radius 8px
    position absolute
    top 6px
    left 130px
    cursor pointer
    .dk_con {
      height 100%
      width 100%
      position relative
    }
    .dk_btn {
      height 16px
      width 16px
      border-radius 8px
      background #10a9fd
      position absolute
      top -1px
      left -1px
    }
  }
  .ig_contant{
      width 100%;
      height 500px;
      background red;
      display flex;
      .ig_conLeft{
          height 100%;
          width 500px;
          background yellow;
      }
  }
}
</style>