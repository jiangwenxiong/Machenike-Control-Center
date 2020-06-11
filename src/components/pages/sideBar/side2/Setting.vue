<template>
  <div class="gameSetContant">
    <img class="gs_bg" src="/static/img/setbg.png" />
    <div class="gs_infoBox">
      <div class="gs_back" @click="$router.push({ name: 'Side2Optimization' })">
        <img class="gs_backIcon" src="~@/assets/img/side2/backw.png" />
        返回
      </div>
      <div class="gs_gameName">
        <div class="gs_gameImg">
           <img class="gs_gameIcon" src="~@/assets/img/side2/gameIcon.png" />
        </div>
        英雄联盟LOL
      </div>
       <div class="dk_tit">
      游戏加速
      <div class="dk_btnBox" @click="btnClick" :style="{'background':btnLeft>0?'#10a9fd':''}">
        <div class="dk_con">
          <div class="dk_btn" :style="{'left':btnLeft+'px','background':btnLeft>0?'#fff':''}"></div>
        </div>
      </div>
    </div>
      <div class="gs_addInfo">
        <div class="gs_btnArea">
          <div class="gs_addbtn gs_addbtn1" @click="showGame=true;" :class="showGame?'active':''">游戏加速</div>
          <div class="gs_addbtn gs_addbtn2" @click="showGame=false;"  :class="!showGame?'active':''">网络加速</div>
        </div>
        <div class="gs_infoCon">
          <ul class="gs_setBox" v-for="i,index in setList" :class="'gs_setBox'+index" >
          <li class="gs_setName">{{i.setName}}</li>
          <li class="gs_setItem" v-for="item in i.setItem" @click="check(item)">
            <div class="mg_pieBox">
              <div class="mg_pie" v-show="item.checked"></div>
            </div>
            {{item.itemName}}
            <div v-if="item.desc">{{item.desc}}</div>
            <div class="addModeselect" v-if="item.mode" @mouseenter="showModeSec = true;" @mouseleave="showModeSec = false;">{{item.mode}}
               <img class="hw_dowmSj" src="~@/assets/img/side1/sj.png" />
              <ul class="modeSec" v-if="item.modeList" v-show="showModeSec">
              <li v-for="mode in item.modeList" @click="item.mode=mode;showModeSec = false;">{{mode}}</li>
            </ul>
            </div>
            
          </li>
        </ul>
        </div>
      </div>
      <div class="gs_tips">小提示：点击开始加速按钮后，将启动游戏加速</div>
     
      <div class="gs_startBtn">开始加速</div> 
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
      showGame:true,
      showModeSec:false,
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
          setName: "游戏设置优化",
          setItem: [
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: false
            },
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: true
            }
          ]
        },
        {
          setName: "显卡设置优化",
          setItem: [
            {
              itemName: "强制关闭Wallpaper Engnine",
              checked: false,
              desc:'NVIDA设定',
              mode:'平衡（推荐）',
              modeList:[
                '默认画质','性能优先','平衡（推荐）','画质优先'
              ]
            },
  
            
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
    },
       btnClick() {
      if (this.btnLeft == "-1") {
        this.btnLeft = "17";
      } else {
        this.btnLeft = "-1";
      }
    },
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
    margin-top 46px;
    padding-left 412px;

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
      height 30px
      width 87px
      font-size 14px
      color #fff;
      line-height 30px
      text-align center
      border-radius 19px
      border solid 1px #10abff
      background #10abff;
      // box-shadow inset 0px 0px 5px 2px #10abff
      position relative
      cursor pointer
      margin-bottom 6px
      .gs_backIcon {
        height 12px
        position absolute
        top 10px
        left 14px
      }
    }
    .gs_gameName{
      height 28px;
      width 120px;
      position absolute;
      top 24px;
      left 160px;
      line-height 28px;
      color #0b5b91;
      font-size 12px;
      .gs_gameImg{
        height 28px;
        width 28px;
        background #172044;
	      border: solid 1px #10a9fd;
        border-radius 28px;
        display inline-block;
        margin-right 6px;
        .gs_gameIcon{
          height 26px;
          width 26px;
        }
      }
    }
    .gs_addInfo{
      height 430px;
      width 100%;
      display flex;
      .gs_btnArea{
        width 120px;
        margin-right 10px;
        .gs_addbtn{
          width 120px;
          height 50px;
          border: solid 1px #10abff;
          line-height 50px;
          text-align center;
          font-size 14px;
          margin-bottom 14px;
          cursor pointer
        }
        .active{
          box-shadow inset 0px 0px 20px 2px #10abff
        }
      }
      .gs_infoCon{
        width 684px;
        background-color: #141a36;
	      border: solid 1px #10abff;
        overflow auto;
        padding 20px;
        padding-top 0;
      }
    }
  }
  .gs_infoCon {
    // width 100%
    // height 570px
    // padding-top 10px
    // overflow-y auto
    .gs_setBox {
      width 100%
      padding-bottom 10px
      margin-top 20px
      border-bottom 1px solid #10abff
      .gs_setName {
        height 24px
        width 100px
        line-height 24px
        text-align center
        // border solid 1px #10aafd
        // box-shadow inset 0px 0px 5px 2px #10abff
        font-size 14px
        margin-bottom 6px
      }
      .gs_setItem {
        font-size 12px
        height 24px
        line-height 24px
        position relative
        padding-left 26px
        cursor pointer
        position relative;
        .addModeselect{
          height 24px;
          width 120px;
          border 1px solid #10abff;
          padding-left 10px;
          line-height 24px;
          position absolute;
          right 10px;
          top -30px;
           .hw_dowmSj {
          height 10px
          width 14px;
          position absolute
          top 6px
          right 4px
        }
        }
        .modeSec{
           height 96px;
          width 120px;
          border 1px solid #10abff;
          position absolute;
          right -1px;
          top 24px;
          li{
             height 24px;
             line-height 24px;
             padding-left 10px;
             width 100%;
             border-bottom 1px solid #10abff;
             cursor pointer
             &:hover{
               background #10abff;
               color #fff;
             }
          }
        }
      }
    }
    .gs_setBox2{
      border none;
    }
  }
  .mg_pieBox {
    width 12px
    height 12px
    border 1px solid #10abff
    border-radius 6px
    padding 1px
    position absolute
    top 6px
    left 0
    .mg_pie {
      height 8px
      width 8px
      border-radius 4px
      background #10abff
    }
  }
}
.dk_tit {
    height 36px
    font-size 20px
    position relative
    margin-left 130px;
    margin-top 10px;
    margin-bottom 10px;
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
   .gs_startBtn{
      width: 134px;
      height: 44px;
      background-color: #10abff;
      color #fff;
      line-height 44px;
      font-size 14px;
      text-align center;
      position absolute;
      bottom 40px;
      right 46px;
      letter-spacing 4px;
      cursor pointer;
    }
</style>