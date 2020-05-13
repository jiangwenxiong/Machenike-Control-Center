<template>
  <div class = 'diskContant'>
      <img class="com_machenike" src="~@/assets/img/side1/machenikeimg.png" />
      <div class="dk_tit">
        桌面监控
        <div class="dk_btnBox" @click="btnClick" :style="{'background':btnLeft>0?'#10a9fd':''}">
          <div class="dk_con">
             <div class="dk_btn" :style="{'left':btnLeft+'px','background':btnLeft>0?'#fff':''}"></div>
          </div>
         
        </div>
      </div>
      <div class="dk_text">开启功能后监控硬件数据显示在桌面上，让您更方便查看硬件状态</div>
      <div class="dk_titItem">桌面实时监控硬件，更了解您的电脑状态</div>
      <img class="dk_screen" src="/static/img/disk.png" />
      <div class="dk_setting"></div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      btnLeft:-1
    }
  },
  mounted (){
    var that = this;
  },
  methods:{
    btnClick(){
      if(this.btnLeft=='-1'){
        this.btnLeft = '17'
      }else{
        this.btnLeft = '-1'
      }
    }
  },
}
</script>

<style lang='stylus' scoped>
.diskContant {
  height 100%
  width 100%
  color #10a9fd
  overflow hidden
  padding-left: 28px;
  padding-top: 30px;
  position relative;
  .dk_setting{
    width 100%;
    height 520px;
    background #050b24
    position absolute;
    top 130px;
    left 0;
  }
  .dk_tit{
    height 36px;
    font-size 20px;
    position relative;
    .dk_btnBox{
      height 16px;
      width:32px;
      border 1px solid #10a9fd;
      border-radius 8px;
      position absolute;
      top 6px;
      left 130px;
      cursor pointer;
      .dk_con{
        height 100%;
        width 100%;
        position relative;
        }
      .dk_btn{
        height 16px;
        width 16px;
         border-radius 8px;
        background:#10a9fd
        position absolute;
        top -1px;
        left -1px;
        }
      }

    }
    .dk_text{
      font-size 12px;
      width 350px;
      height 20px;
      border-bottom 1px solid #10a9fd;
      }
      .dk_titItem{
        height 30px;
        width 330px;
        margin-top 20px;
        font-size 14px;
        line-height 30px;
        padding-left 14px;
        background url('~@/assets/img/side1/disktit.png') no-repeat 100% 100%
        }
        .dk_screen{
          margin-top 20px;
          height 400px;
          margin-left -2px;
          }
}

</style>