<template>
  <div class = 'installCon'>
       <div class="installBox">
           <img class="ins_logo" src="~@/assets/img/install/logo.png"/>
           <div class="ins_tips">欢迎使用MachenikeCC卸载向导</div>
           <div class="ins_tips ins_tips2">本指南将指导您完成卸载“MachenikeCC”的过程<br>开始卸载之前，请确保“MachenikeCC”未运行</div>
           <div class="next2" @click="$router.push({name:'Unstalling'})">下一步</div>
           <div class="next" >取消</div>
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