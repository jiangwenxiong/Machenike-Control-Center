<template>
  <div class = 'installCon'>
       <div class="installBox">
           <img class="ins_logo" src="~@/assets/img/install/logo.png"/>
           <img class="ins_installIMg" src="~@/assets/img/install/install.png"/>
           <div class="ins_tips">安装中...</div>
           <div class="ins_tips ins_tips2">请等待安装程序正在您的计算机上安装MachenikeCC</div>
           <div class="ins_loadBox">
               <div class="ins_loadBar" :style="{'width':progress+'%'}"></div>
           </div>
           <div class="ins_tips ins_tips2">提取文件...</div>
           <div class="ins_tips ins_tips2">完成！</div>
           <div class="next"  @click="$router.push({name:'Installed'})">下一步</div>
       </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      isEnglish:false,
      progress:60
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
        .ins_installIMg{
            margin-left 98px;
            margin-top 50px;
        }
        .ins_tips{
            font-size 18px;
            width 100%;
            height 18px;
            text-align left;
            padding-left 98px;
            margin-top 12px;
            margin-bottom 10px;
        }
        .ins_tips2{
            font-size 14px;
            color #0b5b92;
        }
        .ins_loadBox{
            height 18px;
            width 884px;
            margin 0 auto;
            border-radius 18px;
            background #141a36;
            .ins_loadBar{
                height 100%;
                background linear-gradient(to right, #0962db 0%, #62fff2 100%)
                border-radius 9px
            }
        }
        
    }
}
</style>