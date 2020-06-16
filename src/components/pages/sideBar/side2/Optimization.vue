<template>
  <div class="optConatant">
    <!-- <div class="op_tit">优化游戏性能&nbsp;&nbsp;&nbsp;&nbsp;提升游戏体验</div>
    <div class="op_setting" @click="$router.push({ name: 'Side2Setting' })">优化设置</div> -->
    <!-- <img class="hw_chartBg" src="~@/assets/img/side2/bg.png" /> -->
    <ul class="op_gameList">
      <li class="op_gameItem" >
        <img class="op_gameImg" src="/static/img/game.jpg" />
        <div class="op_mask op_allCom" v-show="allShowFast">
           <div class="op_allComTit">通用加速</div>
           <div class="op_allCom1">游戏加速：支持所有游戏</div>
            <div class="op_allCom1">网络加速：仅支持部分游戏加速</div>
           <div class="op_hover">通用加速</div>
           <img class="op_flash op_flash1" v-show="!allShowFast" @click="allShowFast=true" src="~@/assets/img/side2/f.png" />
          <img class="op_flash"  v-show="allShowFast" src="~@/assets/img/side2/fb.png" />
        </div>
        
      </li>
      <li class="op_gameItem" v-for="i in gameList" @mouseenter="i.showFast=true;" @mouseleave="i.showFast=false;">
        <img class="op_gameImg" src="/static/img/game.jpg" />
        <!-- <div class="op_btnArea">
          一键优化
          <div class="op_settingArea" @click="$router.push({ name: 'Side2Setting' })">
            <img class="op_setIcon" src="~@/assets/img/side2/setting.png" />
          </div>
        </div> -->
      
        <div class="op_mask">
          <div v-show="i.showFast">
           <div class="op_zd">不置顶</div>
           <div class="op_remove">
             <img class="op_removeIcon" src="~@/assets/img/side2/remove.png" />
             移除
             </div>
             <div class="op_fps" @click="$router.push({ name: 'Side2Setting' })">
               <div class="op_fpsItem">游戏加速
                 <div class="redPoint"></div>
               </div>
               <div class="op_fpsItem">提升游戏FPS</div>
             </div>
             <div class="op_server"  @click="showWindow1=true">
               <div class="op_serverItem">网络加速
                  <div class="redPoint"></div>
               </div>
               <div class="op_serverItem">当前区服：美服</div>
               <div class="op_serverItem">智能节点</div>
             </div>
             </div>
           <div class="op_hover">英雄联盟LOL</div>
           <img class="op_flash op_flash1" v-show="!i.showFast" @click="i.showFast=true" src="~@/assets/img/side2/f.png" />
           <img class="op_flash"  v-show="i.showFast" @click="$router.push({name:'GameBooster'})" src="~@/assets/img/side2/fb.png" />
        </div>
      </li>
      <li class="op_gameItem op_addGame"></li>
    </ul>
    <div class="op_fail" v-show="loadState">
      <img class="op_failImg" src="/static/img/fail.png" />
      <div class="op_reLink">重新连接</div>
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
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      gameList: [],
      loadState: false,
      showWindow1:false,
      isRember:true,
      allShowFast:true
    };
  },
  mounted() {
    var that = this;
    for (let index = 0; index < 5; index++) {
      const element = { game: index ,showFast:false};
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
      width 176px
      height 229px
      border-radius 12px
      margin-right 24px
      margin-top 20px
      display inline-block
      overflow hidden
      position relative
      cursor pointer
      .op_zd{
        width: 52px;
        height: 20px;
        background: rgba(5,11,36,.8);
        border-radius: 3px;
        color:#fff;
        font-size 12px;
        line-height 20px;
        text-align center;
        position absolute;
        top 10px;
        left 10px;
      }
      .op_remove{
        width: 52px;
        height: 20px;
        background: rgba(5,11,36,.8);
        border-radius: 3px;
        color:#fff;
        font-size 12px;
        line-height 20px;
        text-align center;
        position absolute;
        top 10px;
        right 10px;
        padding-left 14px;
        .op_removeIcon{
          position absolute;
          top 4px;
          left 6px;
        }
      }
      .op_fps{
        width: 152px;
        height: 42px;
        background: rgba(5,11,36,.8);
        border-radius: 3px;
        color:#fff;
        font-size 12px;
        margin 0 auto;
        margin-top 46px;
        line-height 20px;
        padding-left 10px;
        position relative
      }
      .op_server{
        width: 152px;
        height: 62px;
        background: rgba(5,11,36,.8);
        border-radius: 3px;
        color:#fff;
        font-size 12px;
        margin 0 auto;
        margin-top 10px;
        line-height 20px;
        padding-left 10px;
         position relative
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
        .op_hover {
          height 40px
          width 100%
          position absolute
          bottom 0
          left 0
          background linear-gradient(to top, #000 0%, transparent)
          text-align left;
          padding-left 16px
          color #fff
          line-height 34px
          font-size 12px
        }
        .op_flash {
          height 36px;
          position absolute
          right 16px
          bottom 8px
        }
        .op_flash1{
          height 29px;
          bottom 12px
          right 19px;
        }
      }
      .op_allCom{
        background rgba(0,0,0,.5);
        .op_allComTit{
          width 100%;
          height 26px;
          font-size 20px;
          color #fff;
          text-align center;
          line-height 26px;
          margin-top 60px;
          letter-spacing: 3px;
          font-style:oblique
          margin-bottom 10px;
        }
        .op_allCom1{
          font-size 12px;
          width 100%;
          padding 0 20px;
          padding-top 10px;
          color #fff;
          opacity .7;
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
    .op_addGame{
       background url('~@/assets/img/side2/addgame.png') no-repeat 100% 100%;
       border-radius none;
    }
  }
  .redPoint{
    width: 9px;
    height: 9px;
    border-radius 9px;
    position absolute
    top 5px
    left 62px
    background-color: #ff0000;
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