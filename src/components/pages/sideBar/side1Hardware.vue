<template>
  <div class="contant">
    <div class="hardwareContant">
      <div class="hardwareLoader" v-show="false">
        <img class="hw_loadIcon" src="/static/img/loadicon.png" />
        <div class="hw_tips hw_tips1">Machenike正在读取硬件信息</div>
        <div class="hw_tips hw_tips2">硬件信息载入中：</div>
        <div class="hw_loadBox">
          <div class="hw_loadContant">
            <div class="hw_loadBar" :style="{'width':progress+'%'}"></div>
          </div>
          <div class="hw_progress">{{progress+'%'}}</div>
        </div>
        <div class="hw_tips hw_tips3">信息源来自CPU-Z/GPU-Z/Machenike官方数据库</div>
      </div>
      <div class="hardwareInfo">
         <img class="hw_machenike" src="~@/assets/img/side1/machenikeimg.png" />
         <div class="hw_infoBox">
           <div class="hw_infoLeft">
             <div class="hw_infoTips">
               <span class="hw_tipsName">扫描时间</span>|<span class="hw_infoTime">2020-03-10&nbsp;14:30</span>
               <div class="hw_reBtn">重新扫描</div>
               <div class="hw_details">详情</div>
             </div>
             <ul class="hw_infoItems">
               <li class="hw_infoItem">
                 <div class="hw_itemName"></div>
               </li>
             </ul>
           </div>
           <div class="hw_infoRight"></div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemIcon1 from "@/assets/img/side1/item1.png";
import ItemIcon2 from "@/assets/img/side1/item2.png";
import ItemIcon3 from "@/assets/img/side1/item3.png";
import ItemIcon4 from "@/assets/img/side1/item4.png";
import ItemIcon5 from "@/assets/img/side1/item5.png";
import ItemIcon6 from "@/assets/img/side1/item6.png";
import ItemIcon7 from "@/assets/img/side1/item7.png";
export default {
  name: "",
  data() {
    return {
      msg: "",
      progress: 63,
      itemList:[
        {
          name:'系统',
          icon:ItemIcon1,
          desc:'Windows&nbsp;10&nbsp;64位<br>版本号18362'
        },
        {
          name:'处理器',
          icon:ItemIcon2,
          desc1:'intel Core i7-9750H',
          desc2:'核心数6 线程数12 频率3.99GHz 电压 1.16V'
        },
        {
          name:'系统',
          icon:ItemIcon1,
          desc1:'Windows 10 64位',
          desc2:'版本号18362'
        },
        {
          name:'系统',
          icon:ItemIcon1,
          desc1:'Windows 10 64位',
          desc2:'版本号18362'
        },
        {
          name:'系统',
          icon:ItemIcon1,
          desc1:'Windows 10 64位',
          desc2:'版本号18362'
        },
        {
          name:'系统',
          icon:ItemIcon1,
          desc1:'Windows 10 64位',
          desc2:'版本号18362'
        },
      ]
    };
  },
  mounted() {
    var that = this;
    var t = setInterval(() => {
      if (that.progress < 100) {
        that.progress += 1;
      } else {
        clearInterval(t);
      }
    }, 100);
  },
  methods: {}
};
</script>

<style lang='stylus' scoped>
.hardwareContant {
  height 100%
  width 100%
  color #10a9fd
  overflow hidden
}
.hardwareLoader {
  height 120px
  width 100%
  margin-top 250px
  padding-left 144px
  position relative
  .hw_tips {
    width 414px
    height 16px
    line-height 16px
    position absolute
    left 300px
  }
  .hw_tips1 {
    font-size 14px
    top 15px
  }
  .hw_tips2 {
    font-size 12px
    top 32px
  }
  .hw_tips3 {
    font-size 12px
    top 90px
    text-align right
  }
  .hw_loadBox {
    width 414px
    height 14px
    border-radius 7px
    border solid 1px #10a9fd
    position absolute
    left 300px
    top 54px
  }
  .hw_loadContant {
    height 100%
    width 100%
    position relative
    overflow hidden
  }
  .hw_progress {
    position absolute
    right 0
    top -20px
    font-size 12px
  }
  .hw_loadBar {
    height 14px
    width 0%
    position absolute
    left -1px
    top -1px
    border-radius 8px
    background linear-gradient(to right, #0962db 0%, #83d3ff 100%)
  }
  
}
.hardwareInfo{
     height 100%;
     width 100%
     padding-left 28px;
     padding-top 30px;
  }
  .hw_machenike{
    margin-bottom 20px;
  }
  .hw_infoBox{
    width 835px;
    height 500px;
    padding-left 8px;
    display flex;
  }
  .hw_infoLeft{
    height 100%;
    width 498px;
  }
  .hw_infoTips{
    font-size 20px;
    height 20px;
    position relative;
    .hw_tipsName{
      margin-right 10px;
    }
    .hw_infoTime{
      font-size 18px;
      line-height 20px;
      margin-left 10px;
    }
    .hw_reBtn{
      width 72px;
      height 26px;
      line-height 28px;
      color #fff;
      text-align center;
      font-size 12px;
      background: url("~@/assets/img/side1/rebg.png") no-repeat 100% 100%;
      position absolute;
      top 0;
      right 134px;
      cursor pointer
    }
    .hw_details{
      width: 39px;
      height: 20px;
      font-size 12px;
      line-height 20px;
      text-align center;
      border: solid 1px #10abff;
      position absolute;
      top 3px;
      right 80px;
      cursor pointer
    }
  }
  .hw_infoItems{
    width 100%;
    height auto;
    overflow hidden;
     margin-top 6px;
    .hw_infoItem{
      width 488px;
      height 48px;
      background: url("~@/assets/img/side1/infobg.png") no-repeat 100% 100%;
      margin-top 14px;
      display flex;
      .hw_itemName{
         position relative;
         height 100%;
         width 124px;
         background red;
      }
    }
  }
</style>