<template>
  <div class = 'updateCon'>
        <img class="up_logo" src="~@/assets/img/install/logo.png"/>
        <div class="up_tips up_tips1">当前版本：4.3.1111</div>
        <div class="up_tips">最新版本：4.3.1112<span>忽略此版本</span></div>
        <div class="up_btnBox">
             <div class="up_btn up_btn1" @click="$router.push({name:'Side4Driver'})">暂不更新</div>
             <div class="up_btn up_btn2" >更新</div>
        </div>
        <div class="up_info">
            更新内容：<br>
            1.机械师游戏本[MACHENIKE]，互联网定制游戏本品牌!机械师笔记本成立于2014年，是由全球顶尖IT厂商蓝天、广达、INTEL、NVIDIA、Microsoft等联手打造的中高端游戏本品牌。通过互联网渠道售卖，拥有专门的物流及售后保障，旨在为游戏玩家打造出高品质、高体验度、能够任性玩耍的游戏笔记本!品牌slogan为：任性玩出范!<br><br>
            2.机械师游戏本[MACHENIKE]，互联网定制游戏本品牌!机械师笔记本成立于2014年，是由全球顶尖IT厂商蓝天、广达、INTEL、NVIDIA、Microsoft等联手打造的中高端游戏本品牌。通过互联网渠道售卖，拥有专门的物流及售后保障，旨在为游戏玩家打造出高品质、高体验度、能够任性玩耍的游戏笔记本!品牌slogan为：任性玩出范!
        </div>
  </div> 
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  },
  mounted (){
    var that = this;
  },
  methods:{

  },
}
</script>

<style lang='stylus' scoped>
.updateCon{
    height 100%;
    width 100%;
    color #10a9fd
    overflow hidden
    padding-top 30px
    position relative
    .up_logo{
        display block
        margin 0 auto;
        margin-top 40px;
    }
    .up_tips{
        height 20px;
        width 100%;
        padding-left 370px;
        font-size 14px;
        color #0b5b92
        span{
            display inline-block;
            margin-left 8px;
            border-bottom 1px solid #10a9fd; 
            color #10a9fd;
            cursor pointer
        }
    }
    .up_tips1{
         margin-top 10px;
    }
    .up_btnBox{
        height 46px;
        width 100%;
        display flex;
        margin-top 20px;
        .up_btn{
            height 46px;
            width 132px;
            font-size 14px;
            text-align center;
            line-height 46px;
            color #10a9fd;
            border-radius 2px;
            border 1px solid #10a9fd;
            margin-left 286px;
            cursor pointer
        }
        .up_btn2{
            background #10a9fd;
            color #fff;
             margin-left 56px;
        }
    }
    .up_info{
        height 250px;
        width 320px;
        background #141936;
        margin 0 auto;
        overflow auto;
        padding 10px;
        margin-top 20px;
        font-size 14px;
        color #10a9fd;
    }
}

</style>