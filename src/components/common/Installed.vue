<template>
  <div class = 'installCon'>
       <div class="installBox">
           <img class="ins_logo" src="/static/img/sucess.png"/>
           <div class="ins_tips">完成MachenikCC安装向导</div>
           <div class="ins_tips ins_tips2">请使用您的MachenikeCC ID登录，或者创建一个新的MachenikeCC并开始使用<br>单击“完成”退出设置</div>
           <div class="ins_run" >
               <div class="ins_runBox" @click="isRun=!isRun">
                   <img class="ins_kuang" src="~@/assets/img/install/kuang.png"/>
                    <img class="ins_check" v-show="isRun" src="~@/assets/img/install/check.png"/>
                   安装后运行MachenikeCC
               </div>
           </div>
           <div class="next" @click="$router.push({name:'Login'})">下一步</div>
       </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      isRun:true
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
        .ins_run{
            height 20px;
            width 158px;
            position absolute;
            bottom 106px;
            left 44px;
            .ins_runBox{
                position relative;
                font-size 12px;
                padding-left 18px;
                cursor pointer;
                .ins_kuang{
                    position absolute;
                    top 4px;
                    left 0;
                }
                .ins_check{
                    position absolute;
                    top 6px;
                    left 2px;
                }
            }
        }
        
    }
}
</style>