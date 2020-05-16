<template>
  <div class="hardContant">
    <img class="hc_logo" src="~@/assets/img/side5/logo.png" />
    <ul class="hc_coreBox">
        <li class="hc_btn hc_left"><img src="~@/assets/img/side5/left.png" /></li>
        <li class="hc_btn hc_right"><img src="~@/assets/img/side5/right.png" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      coreList:[
          {
              img:'',
              name:'硬核软件1',
              tit:'使用感受',
              desc:'六神语录:从众多软件中挑选出好用的软件,具体表现在功能强大、提高效率、更好的体验... 软件推荐 从众多软件中挑选出好用的软件'
          },
           {
              img:'',
              name:'硬核软件2',
              tit:'',
              desc:'特色功能1'
          },
           {
              img:'',
              name:'硬核软件3',
              tit:'',
              desc:'特色功能1'
          },
           {
              img:'',
              name:'硬核软件4',
              tit:'',
              desc:'特色功能1'
          },
      ]
    };
  },
  mounted() {
    var that = this;
  },
  methods: {}
};
</script>

<style lang='stylus' scoped>
.hardContant {
  height 100%
  width 100%
  color #10a9fd
  overflow hidden
  padding-top 30px
  padding-left 50px
  position relative
  padding-left 60px
  padding-top 50px
  .hc_coreBox {
    height 366px
    width 100%
    position relative
    background red
    margin-top 50px;
    .hc_btn{
        height 40px;
        width 26px;
        position absolute;
        top 80px;
    }
    .hc_left{
        left -46px;
    }
    .hc_right{
        right 14px;
    }
  }
}
</style>