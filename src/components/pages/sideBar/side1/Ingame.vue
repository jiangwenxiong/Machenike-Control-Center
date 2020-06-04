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
        <div class="ig_tips">
          <div class="ig_tipLeft"></div>热键
        </div>
        <div class="ig_modify">修改</div>
        <div class="ig_itemBox">
          <div class="ig_itemLeft">
            打开/关闭游戏内设置面板
            <div class="ig_itemTips">ctrl+TAB</div>
          </div>
          <div class="ig_itemRight">
            打开/关闭效果
            <div class="ig_itemTips">ctrl+TAB</div>
          </div>
        </div>
        <div class="ig_tips">
          <div class="ig_tipLeft"></div>监控设置
        </div>
        <ul class="ig_configItem">
          <li class="ig_configName ig_configName1">
            {{styleMode.name}}
            <img class="ig_rightSj" src="~@/assets/img/side1/right.png" />
          </li>
          <li class="ig_cfItem" v-for="item,index in styleMode.Item"  @click="chackStyle(1,index)">
            <div class="dk_pieBox">
              <div class="dk_pie" v-show="item.chacked"></div>
            </div>
            {{item.name}}
          </li>
        </ul>
        <div class="ig_showCon">
          <img class="ig_showImg" src="/static/img/styleBg.jpg" />
        </div>
        <ul class="ig_configItem">
          <li class="ig_configName ig_configName2">
            {{fontSize.name}}
            <img class="ig_rightSj" src="~@/assets/img/side1/right.png" />
          </li>
          <li class="ig_cfItem ig_cfItem2" v-for="item,index in fontSize.Item" @click="chackStyle(2,index)">
            <div class="dk_pieBox">
              <div class="dk_pie" v-show="item.chacked"></div>
            </div>
            {{item.name}}
          </li>
        </ul>
        <ul class="ig_configItem">
          <li class="ig_configName ig_configName2">
            {{refreshTime.name}}
            <img class="ig_rightSj" src="~@/assets/img/side1/right.png" />
          </li>
          <li class="ig_cfItem" v-for="item,index in refreshTime.Item" @click="chackStyle(3,index)">
            <div class="dk_pieBox">
              <div class="dk_pie" v-show="item.chacked"></div>
            </div>
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="ig_con ig_conRight">
          <div class="ig_tips">
          <div class="ig_tipLeft"></div>监控内容
        </div>
        <div class="ig_rightBox">
          <div class="ig_configName">
            {{baseMode.name}}
             <img class="ig_rightSj" src="~@/assets/img/side1/right.png" />
          </div>
          <ul class="ig_rightConfig">
            
            <li v-for="item in baseMode.Item" @click="item.chacked=!item.chacked">
              <div class="dk_pieBox">
              <div class="dk_pie" v-show="item.chacked"></div>
            </div>
            {{item.name}}</li>
          </ul>
        </div>
        <div class="ig_rightBox">
          <div class="ig_configName">
            {{CPUMode.name}}
             <img class="ig_rightSj" src="~@/assets/img/side1/right.png" />
          </div>
          <ul class="ig_rightConfig">
            
            <li v-for="item in CPUMode.Item" @click="item.chacked=!item.chacked">
              <div class="dk_pieBox">
              <div class="dk_pie" v-show="item.chacked"></div>
            </div>
            {{item.name}}</li>
          </ul>
        </div>
        <div class="ig_rightBox">
          <div class="ig_configName">
            {{GPUMode.name}}
             <img class="ig_rightSj" src="~@/assets/img/side1/right.png" />
          </div>
          <ul class="ig_rightConfig">
            
            <li v-for="item in GPUMode.Item" @click="item.chacked=!item.chacked">
              <div class="dk_pieBox">
              <div class="dk_pie" v-show="item.chacked"></div>
            </div>
            {{item.name}}</li>
          </ul>
        </div>
        <div class="ig_rightBox">
          <div class="ig_configName">
            {{RAMMode.name}}
             <img class="ig_rightSj" src="~@/assets/img/side1/right.png" />
          </div>
          <ul class="ig_rightConfig">
            
            <li v-for="item in RAMMode.Item" @click="item.chacked=!item.chacked">
              <div class="dk_pieBox">
              <div class="dk_pie" v-show="item.chacked"></div>
            </div>
            {{item.name}}</li>
          </ul>
        </div>
        <div class="ig_rightBox">
          <div class="ig_configName">
            {{netMode.name}}
             <img class="ig_rightSj" src="~@/assets/img/side1/right.png" />
          </div>
          <ul class="ig_rightConfig">
            
            <li v-for="item in netMode.Item" @click="item.chacked=!item.chacked">
              <div class="dk_pieBox">
              <div class="dk_pie" v-show="item.chacked"></div>
            </div>
            {{item.name}}</li>
          </ul>
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
      styleMode: {
        name: "样式",
        Item: [
          {
            name: "横向模式",
            chacked: true
          },
          {
            name: "横向模式2",
            chacked: false
          },
          {
            name: "竖向模式",
            chacked: false
          },
          {
            name: "竖向模式2",
            chacked: false
          },
          {
            name: "测评模式",
            chacked: false
          }
        ]
      },
      fontSize: {
        name: "字体大小",
        Item: [
          {
            name: "480",
            chacked: true
          },
          {
            name: "720",
            chacked: false
          },
          {
            name: "2K",
            chacked: false
          },
          {
            name: "4K",
            chacked: true
          }
        ]
      },
      refreshTime: {
        name: "刷新时间",
        Item: [
          {
            name: "1秒",
            chacked: true
          },
          {
            name: "2秒",
            chacked: false
          },
          {
            name: "3秒",
            chacked: false
          },
          {
            name: "4秒",
            chacked: false
          }
        ]
      },
       baseMode: {
        name: "基本",
        Item: [
          {
            name: "FPS",
            chacked: true
          },
          {
            name: "当前时间",
            chacked: false
          },
          {
            name: "运行时间",
            chacked: false
          }
        ]
      },
      CPUMode: {
        name: "CPU",
        Item: [
          {
            name: "温度(℃)",
            chacked: true
          },
          {
            name: "占用率(%)",
            chacked: false
          },
          {
            name: "热功耗(W)",
            chacked: false
          },
          {
            name: "风扇转速(RMP)",
            chacked: false
          }
          ,
          {
            name: "频率(MHz)",
            chacked: false
          }
        ]
      },
       GPUMode: {
        name: "GPU",
        Item: [
          {
            name: "风扇转速(RMP)",
            chacked: true
          },
          {
            name: "风扇转速(RMP)",
            chacked: false
          },
          {
            name: "风扇转速(RMP)",
            chacked: false
          },
          {
            name: "风扇转速(RMP)",
            chacked: false
          }
        ]
      },
       RAMMode: {
        name: "内存",
        Item: [
          {
            name: "风扇转速(RMP)",
            chacked: true
          },
          {
            name: "风扇转速(RMP)",
            chacked: false
          }
        ]
      },
       netMode: {
        name: "网络",
        Item: [
          {
            name: "风扇转速(RMP)",
            chacked: true
          },
          {
            name: "风扇转速(RMP)",
            chacked: false
          }
        ]
      }
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
    chackStyle(type, index) {
      var that = this;
      switch (type) {
        case 1:
          that.styleMode.Item.forEach(item => {
            item.chacked = false;
          });
          that.styleMode.Item[index].chacked = true;
          break;
        case 2:
          that.fontSize.Item.forEach(item => {
            item.chacked = false;
          });
          that.fontSize.Item[index].chacked = true;
          break;
        case 3:
          that.refreshTime.Item.forEach(item => {
            item.chacked = false;
          });
          that.refreshTime.Item[index].chacked = true;
          break;
      }
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
    .ig_ts {
      font-size 12px
      position absolute
      top 4px
      left 180px
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
  .ig_contant {
    width 100%
    height 500px
    display flex
    padding-top 20px
    .ig_conLeft {
      height 100%
      width 480px
      position relative
      .ig_configItem {
        height 36px
        width 100%
        display flex
        line-height 36px
        font-size 12px
        .ig_configName {
          width 80px
          position relative
          .ig_rightSj {
            height 18px
            width 32px
            position absolute
            top 8px
            left 20px
          }
        }
        .ig_configName2 {
          width 100px
          .ig_rightSj {
            left 40px
          }
        }
        .ig_cfItem {
          flex 1
          position relative
          cursor pointer;
        }
      }
      .ig_showCon {
        height 186px
        width 466px
        border 1px solid #10a9fd
        margin-top 6px;
        margin-bottom 6px;
        .ig_showImg {
          height 100%
          width 100%
        }
      }
      .ig_itemBox {
        height 36px
        width 100%
        margin-top 10px
        margin-bottom 40px
        line-height 36px
        display flex
        font-size 14px
        .ig_itemLeft {
          height 100%
          width 270px
          border 1px solid #10a9fd
          position relative
          text-align center
          padding-right 86px
          margin-right 12px
        }
        .ig_itemRight {
          height 100%
          width 198px
          border 1px solid #10a9fd
          position relative
          text-align center
          padding-right 86px
        }
        .ig_itemTips {
          width 86px
          height 100%
          background #10a9fd
          color #fff
          position absolute
          top 0
          right 0
        }
      }
    }
    .ig_conRight{
      padding-left 30px;
      width 340px;
      .ig_rightBox{
        min-height 36px;
        width 100%;
        display flex;
        font-size 12px;
        margin-top 10px;
        .ig_configName{
          width 80px;
          position relative;
          line-height 36px;
           .ig_rightSj {
            height 18px
            width 32px
            position absolute
            top 8px
            left 20px
          }
        }
        .ig_rightConfig{
          flex 1;
          min-height 36px;
          li{
            height 36px;
            width 50%;
            float left;
            line-height 36px;
            position relative;
            cursor pointer
          }
        }
      }
    }
  }
  .ig_tips {
    height 26px
    width 90px
    border 1px solid #10a9fd
    font-size 14px
    line-height 26px
    position relative
    text-align center
    padding-left 10px
    .ig_tipLeft {
      height 100%
      width 10px
      background #10a9fd
      position absolute
      top 0
      left 0
    }
  }
  .ig_modify {
    height 26px
    width 60px
    border 1px solid #10a9fd
    font-size 14px
    line-height 26px
    position relative
    text-align center
    box-shadow inset 0px 0px 10px 2px #10abff
    position absolute
    top 0
    right 0
  }
  .dk_pieBox {
    width 12px
    height 12px
    border 1px solid #10abff
    border-radius 6px
    padding 1px
    position absolute
    top 12px
    left -14px
    cursor pointer
    .dk_pie {
      height 8px
      width 8px
      border-radius 4px
      background #10abff
    }
  }
}
</style>