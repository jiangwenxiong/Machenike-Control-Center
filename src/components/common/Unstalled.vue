<template>
  <div class = 'installCon'>
       <div class="installBox">
           <img class="ins_logo" src="/static/img/unstall.png"/>
           <div class="ins_tips">完成MachenikeCC卸载向导</div>
           <div class="ins_tips ins_tips2">MachenikeCC从您的计算机上卸载<br>如果您想重新安装，请转到<a href="https://www.machenike.com">https://www.machenike.com</a>下载安装程序</div>
           <div class="ins_tips ins_tips2" style="margin-top:30px;">单击[完成]以退出卸载过程</div>
           
           <div class="next" @click="$router.push({name:'Login'})">完成</div>
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
            a{
                color #10a9fd; 
            }
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