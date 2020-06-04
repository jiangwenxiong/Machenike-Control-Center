<template>
  <div class = 'installCon'>
       <div class="installBox">
           <img class="ins_logo" src="~@/assets/img/install/logo.png"/>
           <div class="ins_tips">MachenikCC安装程序</div>
           <div class="ins_tips ins_tips2">这将花费您几分钟时间在您的计算机上安装MachenikeCC<br>该向导将引导您逐步完成安装</div>
           <div class="ins_btnBox">
               <div class="ins_btn ins_btn1" :class="isEnglish?'ins_active':''" @click="isEnglish=true">English</div>
               <div class="ins_btn ins_btn2" :class="!isEnglish?'ins_active':''" @click="isEnglish=false">简体中文</div>
           </div>
           <div class="next" @click="$router.push({name:'Installing'})">下一步</div>
       </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      isEnglish:false
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
.installCon{
    height 100%;
    width 100%;
    .installBox{
        height 100%;
        width 100%;
        position absolute;
        top 50px;
        left 0;
        background #050b24;
        color #10a9fd;
        .ins_logo{
            display block;
            margin 0 auto;
            margin-top 150px;
        }
        .ins_tips{
            font-size 18px;
            width 100%;
            height 18px;
            text-align center;
            margin-top 12px;
            margin-bottom 10px;
        }
        .ins_tips2{
            font-size 14px;
            color #0b5b92;
        }
        .ins_btnBox{
            height 46px;
            width 100%;
            display flex;
            margin-top 40px;
        }
        .ins_btn{
            height 46px;
            width 132px;
            font-size 14px;
            text-align center;
            line-height 46px;
            color #0b5b92;
            background url('~@/assets/img/install/btnbg2.png') no-repeat 100% 100%
        }
        .ins_active{
            color #10a9fd;
             background url('~@/assets/img/install/btnbg.png') no-repeat 100% 100%
        }
        .ins_btn1{
            margin-left 390px;
        }
        .ins_btn2{
            margin-left 60px;
        }
    }
}
</style>