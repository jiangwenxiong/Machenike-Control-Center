<template>
  <div class = 'installCon'>
       <div class="installBox">
           <img class="ins_installIMg" src="~@/assets/img/install/delete.png"/>
           <div class="ins_tips ins_tips3">卸载MachenikeCC</div>
           <div class="ins_tips ins_tips2">将从您的电脑上卸载“MachenikeCC”</div>
           <div class="ins_tips ins_tips2">该向导将从您的计算机上卸载“MachenikeCC”</div>
           <div class="ins_tips ins_tips2">单机[卸载]以开始卸载过程</div>
           <div class="ins_unstallFile">
             卸载目录：
            <input class="ins_route" type="text" v-model="fileRoute"/>
           </div>
            <div class="ins_tips ins_tips2 ins_tips4">您的心声是MachenikeCC最想聆听的声音</div>
            <textarea class="ins_textArea"></textarea>
            <div class="next2" @click="$router.push({name:'Unstalled'})">卸载</div>
           <div class="next">取消</div>
           
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
      progress:60,
      fileRoute:"D:MachenikeCC"
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
            height 30px;
            text-align left;
            margin-left 98px;
            margin-top 12px;
            margin-bottom 10px;
        }
        .ins_tips2{
            height 14px;
            font-size 14px;
            color #0b5b92;
             margin-top 6px
            margin-bottom 6px;
        }
        .ins_tips3{
          width 150px;
          border-bottom 2px solid #10a9fd;
        }
        .ins_tips4{
           color #10a9fd;
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
        .ins_unstallFile{
          height 30px;
          width 100%;
          padding-left 98px;
          line-height 30px;
          font-size 14px;
            color #0b5b92;
            margin-top 20px;
            margin-bottom 20px;
          .ins_route{
            width 870px;
            height 30px;
            border 1px solid #10abff;
            background-color: #141a36;
             color #10a9fd;
             padding-left 10px;
          }
        }
        .ins_textArea{
          display block;
          width 944px;
          height 146px;
          border 1px solid #10abff;
          background-color: #141a36;
          margin-left 98px;
          margin-top 10px;
          color #10a9fd;
          padding 10px;
        }
        
    }
}
</style>