<template>
  <div class = 'gb_contant'>
    <div class="gb_loadContant" v-show="isLoad">
      <div class="gb_loadBox"> 
        <div class="gb_loadTop">
           <img class="gb_gameImg" src="~@/assets/img/side2/game2.png" />
           英雄联盟LOL
           <div class="gb_stop" @click="showWindow2=true;">停止加速</div>
        </div>
        <div class="gb_loadText">正在为您加速<span class="gb_progress">{{progress}}%</span><span class="gb_tips">正在停止Windows服务：home design</span></div>
        <div class="gb_loadBar">
          <div class="gb_bar" :style="{'width':progress+'%'}"></div>
        </div>
        <div class="gb_imgBox">
            <img class="gb_img1" src="~@/assets/img/side2/js.png" />
            <img class="gb_img2" src="~@/assets/img/side2/jt.png" />
            <img class="gb_img3" src="~@/assets/img/side2/wc.png" />
        </div>
      </div>

    </div>
    <div class="gb_timeComtant" v-show="!isLoad">
      <img class="gb_logo" src="~@/assets/img/side2/logo.png" />
      <div class="gb_timeBox">
        <img class="gb_gameImg" src="/static/img/game.jpg" />
        <div class="gb_gameInfo">
          <div class="gb_optimize">
            <div class="gb_opItem">
              <img class="" src="~@/assets/img/side2/xz.png" />
              Windows优化
            </div>
            <div class="gb_opItem">
              <img class="" src="~@/assets/img/side2/xz.png" />
              Windows优化
            </div>
            <div class="gb_opItem">
              <img class="" src="~@/assets/img/side2/xz.png" />
              Windows优化
            </div>
          </div>
          <div class="gb_tips">游戏加速时长</div>
          <div class="gb_timer">00:00:00</div>
          <div class="gb_stop" @click="showWindow2=true;">停止加速</div>
          <div class="gb_gameName">英雄联盟LOL</div>
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
            <img class="gb_ts" src="~@/assets/img/side2/th.png" />
            停止加速可能导致游戏卡顿<br>是否继续操作？
          </div>
          <div class="logBtn">确定</div>
          <div class="logBtn logBtn2" @click="showWindow2=false">取消</div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: '',
 
  data () {
    return {
      progress:25,
      showWindow2:false,
      msg: '',
      isLoad:true
    }
  },
  mounted (){
    var that = this;
    var t = setInterval(function(){
      if(that.progress<100&&that.isLoad){
        that.progress+=1;
      }else{
        that.isLoad = false;
        clearInterval(t);
      }
    },100)
  },
  methods:{

  },
}
</script>

<style lang='stylus' scoped>
.gb_contant {
  height 100%
  width 100%
  color #10a9fd
  position relative
  .gb_loadContant{
    height 100%;
    width 100%;
   
    .gb_loadBox{
      width 580px;
      height 220px;
      margin 0 auto;
      margin-top 180px;
      .gb_loadTop{
        width 100%;
        height 46px;
        line-height 46px;
        position relative
        .gb_gameImg{
          margin-right 10px;
        }
        .gb_stop{
          width: 132px;
          height: 46px;
          background-color: #10abff;
          border-radius: 4px;
          color #fff;
          font-size 16px;
          text-align center;
          position absolute;
          top 0;
          right 0;
          cursor pointer
        }
      }
      .gb_loadText{
        height 30px;
        width 100%;
        margin-top 14px;
        font-size 14px;
        position relative
        .gb_progress{
          color #fff;
          font-size 30px;
          margin-left 10px;
          font-weight bold
        }
        .gb_tips{
          font-size 12px;
          position absolute;
          right 0;
          bottom 0;
          opacity .7;
        }
      }
      .gb_loadBar{
        height 18px;
        width 100%;
        background-color: #141a36;
	      border-radius: 18px;
        margin-top 10px;
        .gb_bar{
          height 18px;
          width 100%;
          border-radius: 18px;
          background linear-gradient(to right, #0962db 0%, #62fff2 100%)
        }
      }
      .gb_imgBox{
        height 76px;
        width 100%;
        position relative ;
        margin-top 15px;
        img{
          position absolute;
          top 0;
        } 
        .gb_img1{
          left 10px;
        }
         .gb_img3{
          right 10px;
        }
         .gb_img2{
          left 122px;
          top 20px;
        }
      }
    }
  }
  .gb_timeComtant{
    height 100%;
    width 100%;
    position absolute;
    top 0;
    left 0;
    padding-left 30px;
    padding-top 100px;
   .gb_timeBox{
     height 260px;
     width 100%;
     margin-top 30px;
     display flex;
     position relative
     .gb_gameName{
       height 20px;
       width 176px;
       position absolute;
       bottom 0;
       left 0;
       line-height 20px;
       text-align center;
       }
     .gb_gameImg{
      height 230px;
      width 176px;
      margin-right 20px;
      border-radius: 5px;
      }
      .gb_gameInfo{
        height 230px;
        width 500px;
        .gb_optimize{
          height 18px;
          width 100%;
          display flex;
          .gb_opItem{
             line-height 18px;
             margin-right 30px; 
            }
          }
        }
        .gb_tips{
          width: 108px;
          height: 34px;
          border: solid 1px #10aafd;
          font-size 12px;
          line-height 34px;
          text-align center;
          margin-top 30px;
          margin-bottom 10px;
        }
        .gb_timer{
            height 48px;
            width 300px;
            font-size 60px;
            color #fff;
            font-weight 600;          
          }
          .gb_stop{
          width: 132px;
          height: 46px;
          background-color: #10abff;
          border-radius: 4px;
          color #fff;
          font-size 16px;
          line-height 46px;
          text-align center;
          cursor pointer
          margin-top 40px;
        }
     }
    
    }
  .logoutMask{
    left -188px;
    top -50px;
    height 720px;
    width 1080px;
    background rgba(0,0,0,.5)
  }
  .logoutCon{
    margin-left -160px;
    height 174px;
  }
  .logtips{
    height 40px;
    padding-left 130px; 
    padding-right 30px;
    .gb_ts{
      position absolute;
      top 4px;
      left 90px;
    }
  }
  .logContant{
    height 130px;
  }
  .baseClose{
    cursor pointer;
  }
  }
</style>