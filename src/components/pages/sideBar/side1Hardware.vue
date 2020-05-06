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
               <li class="hw_infoItem" v-for="item in itemList">
                 <div class="hw_itemName">
                   <img class="hw_ItemIcon" :src="item.icon" />
                   <span>{{item.name}}</span>
                 </div>
                 <div class="hw_itemDesc" >
                   <div class="hw_descItem" v-for="i,index in item.desc" :class="'hw_descItem'+index"  v-html="i"></div>
                   <div class="hw_desctit">{{item.desctit}}</div>
                   <div class="hw_descNc" v-for="i,index in item.items" :class="'hw_descNc'+index"  v-html="i"></div>
                 </div>
               </li>
             </ul>
           </div>
           <div class="hw_infoRight">
             <div class="hw_tempBox">
               <div class="hw_line1"></div>
               <div class="hw_line2"></div>
               <div class="hw_tempTips">温度监控</div>
             </div>
             <ul class="hw_tempItems">
               <li class="hw_tempItem" v-for="item,index in tempList">
                 <div class="hw_startPoint"></div>
                 <div class="hw_tipsName">{{item.name}}</div>
                  <div class="hw_value">{{item.value}}°</div>
                  <img class="hw_tempLine" src="~@/assets/img/side1/templine.png" />
                 <div class="hw_tempBorder">
                    <div class="hw_tempBar" :id="'hw_tempBar'+index" :style="{'width':item.value+'%'}"></div>
                 </div>
                
               </li>
             </ul>
           </div>
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
import TempLine from "@/assets/img/side1/templine.png";
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
          desc:['Windows&nbsp;10&nbsp;64位<br>版本号18362']
        },
        {
          name:'处理器',
          icon:ItemIcon2,
          desc:['intel&nbsp;Core&nbsp;i7-9750H<br>核心数6&nbsp;线程数12&nbsp;频率3.99GHz&nbsp;电压&nbsp;1.16V'],
        },
        {
          name:'显卡',
          icon:ItemIcon3,
          desc:[
            'intel（R）UHD&nbsp;Graphics&nbsp;630<br>Machenike流处理器24',
            ' NVIDIA&nbsp;GeForce&nbsp;RTX&nbsp;2060<br>品牌处理器1920显存6G'
          ]
        },
        {
          name:'主硬盘',
          icon:ItemIcon4,
          desc:['INTEL&nbsp;SSDPEKNW010TB<br>实际容量952GB']
        },
        {
          name:'主板',
          icon:ItemIcon5,
          desc:['Machenike<br>品牌Machenike&nbsp;&nbsp;芯片组Intel&nbsp;HM370'],
        },
        {
          name:'显示器',
          icon:ItemIcon6,
          desc:['默认显示器<br>分辨率1920x1080&nbsp;&nbsp;刷新率60Hz'],
        },
        {
          name:'内存',
          icon:ItemIcon7,
          desctit:'总大小16GB 类型DDR4 频率2666MHz',
          items:[
            'Samsung&nbsp;DDR4-2666&nbsp;8GB',
            'Samsung&nbsp;DDR4-2666&nbsp;8GB'
            ]
        }
      ],
      tempList:[
        {
          name:'处理器温度',
          value:45
        },
         {
          name:'显卡温度',
          value:55
        },
         {
          name:'主硬盘温度',
          value:30
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
.hw_infoRight{
  flex 1;
  padding-left 15px;
  .hw_tempBox{
  width 100%;
  height 20px;
  display flex;
  .hw_line1{
    height 100%;
    width 1px;
    background #10abff;
    margin-right 1px;
  }
  .hw_line2{
    height 100%;
    width 5px;
    background #10abff;
    margin-right 2px;
  }
  .hw_tempTips{
    height 100%;
    width 60px;
    border 1px solid #10abff;
    font-size 12px;
    text-align center;
    line-height 20px;
  }
}
.hw_tempItems{
  margin-top 20px;
  .hw_tempItem{
    position relative;
    width 100%;
    height 40px;
    margin-bottom 20px;
    padding-top 10px;
    .hw_tipsName{
      font-size 12px;
      position absolute;
      top -4px;
      left 40px;
    }
    .hw_value{
      font-size 12px;
      position absolute;
      top -4px;
      right 0;
    }
    .hw_tempLine{
      display block;
      position absolute;
      top 2px;
      left 20px;
    }
    .hw_startPoint{
      height 28px;
      width 28px;
      background #10abff;
      border-radius 100%
    }
    .hw_tempBorder{
      height 10px;
      width 294px;
      border-radius 5px;
      position absolute;
      top 20px;
      left 22px;
      border 1px  solid #10abff
    }
    .hw_tempBar{
      height 10px;
      width 30%;
      border-radius 5px;
      background linear-gradient(to right, #10abff 0%, #aa53cf 100%)
    }
    #hw_tempBar2{
       background linear-gradient(to right, #10abff 0%, #53cf7f 100%)
    }
  }
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
         line-height:48px;
         font-size 12px;
         img{
           display: inline-block; 
           vertical-align: middle;
           margin-left 24px;
           margin-right 12px;
         }
         span{
            display: inline-block; 
            position absolute;
            top 0;
            left 74px;
         }
      }
      .hw_itemDesc{
        flex 1;
        padding-left 24px;
        padding-top 8px;
        .hw_descItem{
          font-size 12px;
          display inline-block;
        }
        .hw_descItem1{
          margin-left 20px;
        }
        .hw_descNc,.hw_desctit{
           font-size 12px;
          display inline-block;
        }
        .hw_descNc1{
          margin-left 20px;
        }
      }
    }
  }
  


</style>