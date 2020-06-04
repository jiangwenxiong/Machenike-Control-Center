<template>
  <div class="diskContant">
    <img class="com_machenike" src="~@/assets/img/side1/machenikeimg.png" />
    <div class="dk_tit">
      桌面监控
      <div class="dk_btnBox" @click="btnClick" :style="{'background':btnLeft>0?'#10a9fd':''}">
        <div class="dk_con">
          <div class="dk_btn" :style="{'left':btnLeft+'px','background':btnLeft>0?'#fff':''}"></div>
        </div>
      </div>
    </div>
    <div class="dk_text">开启功能后监控硬件数据显示在桌面上，让您更方便查看硬件状态</div>
    <div class="dk_titItem">桌面实时监控硬件，更了解您的电脑状态</div>
    <img class="dk_screen" src="/static/img/disk.png" />
    <div class="dk_setting" v-show="btnLeft>-1">
      <div class="dk_setItem">
        <div class="dk_setTit">显示模式</div>
        <ul class="dk_setPoint">
          <li class="dk_point" v-for="item,index in displayMode">
            <div class="dk_pieBox" @click="chackDispaly(index)">
              <div class="dk_pie" v-show="item.chacked"></div>
            </div>
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="dk_setItem dk_setItem3">
        <div class="dk_setTit">背景样式</div>
        <div class="dk_styleTips">恢复默认</div>
        <div class="dk_styledesc">当前为透明皮肤</div>
        <div class="dk_styleList">
          <div class="dk_styleItem" @click="showWindow1=true"></div>
          <div class="dk_styleItem" @click="showWindow2=true"></div>
          <div class="dk_styleItem"></div>
          <div class="dk_styleItem"></div>
          <div class="dk_styleItem"></div>
        </div>
      </div>
      <div class="dk_setItem">
        <div class="dk_setTit">移动窗口</div>
        <div class="dk_setPoint">
          <span class="dk_moveMode" :style="{'color':btnLeft2>0?'#fff':''}">当前已锁定</span>/
          <span :style="{'color':btnLeft2>0?'':'#fff'}" class="dk_moveMode">当前可移动</span>
          <div class="dk_btnBox" @click="btnClick2" :style="{'background':btnLeft2>0?'#10a9fd':''}">
            <div class="dk_con">
              <div class="dk_btn" :style="{'left':btnLeft2+'px','background':btnLeft2>0?'#fff':''}"></div>
            </div>
          </div>
          <span class="dk_xts">小提示：解锁后可移动桌面监控位置</span>
        </div>
      </div>
      <div class="dk_setItem dk_setItem2">
        <div class="dk_setTit">监控内容</div>
        <ul class="dk_setPoint">
          <li class="dk_point" v-for="item,index in monitor">
            <div class="dk_pieBox" @click="item.chacked=!item.chacked;">
              <div class="dk_pie" v-show="item.chacked"></div>
            </div>
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="dk_setItem">
        <div class="dk_setTit">其他</div>
        <ul class="dk_setPoint">
          <li class="dk_point dk_point2">
            <div class="dk_pieBox" @click="elseSetting=!elseSetting">
              <div class="dk_pie" v-show="elseSetting"></div>
            </div>当启动游戏时，关闭桌面监控
          </li>
        </ul>
      </div>
    </div>
    <div class="logoutMask" v-show="showWindow1">
      <div class="logoutCon">
        <div class="logTitle">
          温馨提示
          <img class="baseClose" @click="showWindow1=false" src="~@/assets/img/login/close.png" />
        </div>
        <div class="logContant">
          <div class="logtips">
            该功能将默认开启游戏加加，请确认您的电脑内有预装游戏加加在请使用该功能
          </div>
          <div class="rember"  @click="isRember=!isRember"> <img class="ins_check" v-show="isRember" src="~@/assets/img/install/check.png"/></div>
          <div class="remberTs">不再提示</div>
          <div class="logBtn">确定</div>
          <div class="logBtn logBtn2" @click="showWindow1=false">取消</div>
        </div>
      </div>
    </div>
    <div class="logoutMask" v-show="showWindow2">
      <div class="logoutCon">
        <div class="logTitle">
          温馨提示
          <img class="baseClose" @click="showWindow2=false" src="~@/assets/img/login/close.png" />
        </div>
        <div class="logContant">
          <div class="logtips logtips2">
            若要更换此皮肤，系统会默认打开游戏加加。
          </div>
          <div class="rember"  @click="isRember2=!isRember2"> <img class="ins_check" v-show="isRember2" src="~@/assets/img/install/check.png"/></div>
          <div class="remberTs">不再提示</div>
          <div class="logBtn">确定</div>
          <div class="logBtn logBtn2" @click="showWindow2=false">取消</div>
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
      btnLeft: -1,
      btnLeft2: 13,
      elseSetting: true,
      showWindow1:false,
      showWindow2:true,
      isRember:true,
      isRember2:true,
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
  .dk_setting {
    width 100%
    height 520px
    background #050b24
    position absolute
    top 130px
    left 0
    padding-top 20px
  }
  .dk_tit {
    height 36px
    font-size 20px
    position relative
  }
  .dk_text {
    font-size 12px
    width 350px
    height 20px
    border-bottom 1px solid #10a9fd
  }
  .dk_titItem {
    height 30px
    width 330px
    margin-top 20px
    font-size 14px
    line-height 30px
    padding-left 14px
    background url('~@/assets/img/side1/disktit.png') no-repeat 100% 100%
  }
  .dk_screen {
    margin-top 20px
    height 400px
    margin-left -2px
  }
  .dk_setItem {
    width 100%
    height 50px
    padding-left 28px
    font-size 12px
    padding-top 12px
    display flex
    .dk_setTit {
      height 26px
      width 78px
      text-align center
      box-shadow inset 0px 0px 5px 2px #10abff
      border 1px solid #10abff
      line-height 26px
    }
    .dk_setPoint {
      flex 1
      padding-left 50px
      position relative
      .dk_point {
        position relative
        display inline-block
        height 50px
        width 160px
        padding-left 20px
        line-height 26px
      }
      .dk_btnBox {
        left 184px
        top 2px
        height 12px
        width 24px
        .dk_btn {
          height 12px
          width 12px
        }
      }
      .dk_xts {
        margin-left 46px
      }
      .dk_point2 {
        width 200px
      }
    }
  }
  .dk_setItem2 {
    height 80px
    margin-bottom 20px
    .dk_point {
      height 40px !important
    }
  }
  .dk_setItem3 {
    height 160px
    display block
    position relative
    .dk_styleTips{
      width: 70px;
      height: 20px;
      background-color: #10abff;
      border-radius: 10px;
      color #fff;
      text-align center;
      line-height 20px;
      cursor pointer
      position absolute;
      top 14px;
      left 152px;
    }
    .dk_styledesc{
       position absolute;
      top 14px;
      left 240px;
    }
    .dk_styleList {
      height 90px
      width 100%
      margin-top 20px
      padding-left 126px
      display flex
      .dk_styleItem {
        height 90px
        width 90px
        border 1px solid #10abff
        border-radius 12px
        box-shadow inset 0px 0px 5px 2px #10abff
        margin-right 20px
      }
    }
  }
  .dk_pieBox {
    width 12px
    height 12px
    border 1px solid #10abff
    border-radius 6px
    padding 1px
    position absolute
    top 7px
    left 0
    cursor pointer
    .dk_pie {
      height 8px
      width 8px
      border-radius 4px
      background #10abff
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
  .logoutCon{
    left 25%;
    width:382px;
    .logtips{
      padding-left 40px;
      padding-right 40px;
      height: 40px;
      margin-top: 10px;
    }
    .logtips2{
      padding 0;
      text-align center;
      margin-top 20px;
    }
    .logBtn{
      left 120px;
    }
    .logBtn2{
      left 220px;
    }
    .rember{
      position absolute;
      height 10px;
      width 10px;
      border 1px solid #10a9fd
      border-radius 10px;
      top 68px;
      left 10px;
      .ins_check{
        width 6px;
        margin-top 2px;
        margin-left 1px;
        cursor pointer
      }

    }
    .remberTs{
      position absolute;
      top 64px;
      left 24px;
    }
  }
}
</style>