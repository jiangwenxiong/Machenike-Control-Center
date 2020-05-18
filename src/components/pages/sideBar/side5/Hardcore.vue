<template>
  <div class="hardContant">
    <img class="hc_logo" src="~@/assets/img/side5/logo.png" />
    <ul class="hc_coreBox">
        <li class="hc_btn hc_left" @click="prev()"><img src="~@/assets/img/side5/left.png" /></li>
        <li class="hc_btn hc_right" @click="next()"><img src="~@/assets/img/side5/right.png" /></li>
        <li class="hc_coreItem" v-for="(item,index) in coreList" :class="(index+1)==activeIndex?'hc_coreActive':''">
          <div class="hc_coreImg"></div>
          <div class="hc_coreName">{{item.name}}</div>
          <div class="hc_coreTit" v-show="item.tit">{{item.tit}}</div>
          <div class="hc_desc">{{item.desc}}</div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      activeIndex:1,
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
  methods: {
    prev(){
      if(this.activeIndex>1){
        this.activeIndex -=1;
      }
    },
    next(){
       if(this.activeIndex<this.coreList.length){
        this.activeIndex +=1;
      }
    }
  }
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
    height 386px
    width 100%
    position relative
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
    .hc_coreItem{
      height 190px;
      width 134px;
      position relative;
      float left
      cursor pointer;
      margin-right 44px;
      border 1px solid #10a9fd;
      .hc_coreImg{
        width 100%;
        height 134px;
      }
      .hc_coreName{
         width 100%;
        height 32px;
        border-top 1px solid #10a9fd;
        border-bottom 1px solid #10a9fd;
        color #fff;
        line-height 32px;
        text-align center;
        font-size 14px;
      }
      .hc_desc{
        width 100%;
        min-height 24px;
        line-height 24px;
        text-align center;
        font-size 12px;
      }
      .hc_coreTit{
        font-size 14px;
         padding 0 10px ;
      }

    }
    .hc_coreActive{
      min-height 386px;
      width 230px;
      .hc_coreImg{
        width 100%;
        height 230px;
      }
      .hc_desc{
        text-align left;
        padding 0 10px ;
      }
     
    }
  }
}
</style>