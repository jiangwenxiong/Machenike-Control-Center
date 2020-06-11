<template>
  <div class="pe_contant">
    <div class="pe_itemBox1">
      <div class="pe_item">
        <div class="pe_itemName">当日游戏时间</div>
        <div class="pe_itemValue">10小时24分钟20秒</div>
      </div>
      <div class="pe_item pe_item2">
        <div class="pe_itemName">当日用电量</div>
        <div class="pe_itemValue">
          <img class="pe_icon" src="~@/assets/img/side2/f2.png" />
          1.569度
        </div>
      </div>
      <div class="pe_item pe_item3">
        <div class="pe_itemName">当日二氧化碳排放量</div>
        <div class="pe_itemValue">
          <img class="pe_icon" src="~@/assets/img/side2/co2.png" />
          3672.5克
        </div>
      </div>
      <div class="pe_timer">
        2020-06-11
        <img class="pe_icon" src="~@/assets/img/side2/rl.png" />
      </div>
    </div>
    <div class="pe_timeLineBox">
      <div class="pe_timeLine">
        <div
          class="pe_timePoint"
          v-for="i,index in logList"
          :style="{'left':index*60+'px'}"
          :class="i.click?'white':''"
          @click="setTime(i)"
        >
          <div class="pe_tpCon">
            <div class="pe_date" :class="index%2 ==0?'pe_top':'pe_down'">{{i.date}}</div>
            <img
              class="pe_icon"
              v-show="i.click"
              :class="index%2 ==0?'pe_topImg':'pe_downImg'"
              src="~@/assets/img/side2/d.png"
            />
          </div>
        </div>
      </div>
    </div>
    <ul class="pe_logBox">
      <li class="pe_logItem" v-for="item in gameLogList">
        <div class="pe_ltDate">{{item.date}}</div>
        <div class="pe_ltTop">
          <div class="pe_ltGameImg">
            <img class="gs_gameIcon" :src="item.icon" />
          </div>
          {{item.name}}
          <br />
          记录游戏时长：{{item.duration}}
        </div>
        <div class="pe_ltXq" @click="showDetail=true;">详情</div>
        <ul class="pe_logItems">
          <li class="pe_inItem" v-for="i in item.Items">
            <div class="pe_itName">{{i.name}}</div>
            <div class="pe_average">{{i.average}}</div>
            <div class="pe_itName pe_itName2">平均</div>
            <div class="pe_max pe_samll">
              最高
              <span>{{i.max}}</span>
            </div>
            <div class="pe_min pe_samll">
              最低
              <span>{{i.min}}</span>
            </div>
          </li>
        </ul>
        <div class="pe_tips">
          <div class="pe_tipsName">
            <img class="pe_icon" src="~@/assets/img/side2/f3.png" />
            当日用电量
          </div>≈
          <div class="pe_tipsValue">{{item.power}}</div>度
          <div class="pe_tipsOps">1度＝3600千焦</div>
          <div class="pe_tipsOps">100克煎蛋≈870千焦</div>
          <div class="pe_tipsOps">0.1156度≈0.4783个煎蛋</div>
        </div>
        <div class="pe_tips">
          <div class="pe_tipsName">
            <img class="pe_icon" src="~@/assets/img/side2/co.png" />
            CO2
          </div>≈
          <div class="pe_tipsValue">{{item.co2}}</div>克
          <div class="pe_tipsOps">0.9075千克碳排放≈1.6L排放的汽车耗油0.3361升的排放量</div>
        </div>
      </li>
    </ul>
    <div class="hw_detailsPage" v-show="showDetail">
      <div class="hw_detailsCon">
        <div class="hw_deTitle">
          <img class="hw_logo" src="~@/assets/img/login/logo.png" />机械师控制中心 V0.1 统计详情
          <img
            class="hw_close"
            @click="showDetail=false;"
            src="~@/assets/img/topbar/close.png"
          />
        </div>
        <div class="pe_infoCon">
          <div class="pe_ltTop">
            <div class="pe_ltTopBtn pe_ltTopBtn1">性能报告</div>
            <div class="pe_ltTopBtn pe_ltTopBtn2">性能图表</div>
            <div class="pe_ltGameImg">
              <img class="gs_gameIcon" :src="img" />
            </div>英雄联盟LOL
            <br />记录游戏时长:1小时30分钟20秒
            <span>记录开始时间:1小时30分钟20秒</span>
            <span>记录结束时间:1小时30分钟20秒</span>
          </div>
          <div class="pe_diItem">
            <div class="pe_diTips">
              <div class="pe_diLeft">硬件状态</div>
              <div class="pe_diRight">详情</div>
            </div>
            <div class="pe_xtips">
              用电量&nbsp;≈
              <span>
                <img class="pe_icon" src="~@/assets/img/side2/f2.png" />1.588度
              </span>
            </div>
            <div class="pe_xtips">
              二氧化碳排放量&nbsp;≈
              <span class="pe_color2">
                <img class="pe_icon" src="~@/assets/img/side2/co2.png" />3672.3571克
              </span>
            </div>
          </div>
          <div class="pe_datailInfo">
            <div class="pr_doItem1 haveBorder">
              <div class="pr_tit">FPS</div>
              <div class="pr_value">
                <div class="pr_vcon">125</div>
              </div>
            </div>
            <div class="pr_doItem2 haveBorder">
              <div class="pr_tit">处理器</div>
              <div class="pr_chartBox">
                <div class="pr_chart" id="cpuChart1"></div>
                <div class="pr_chart pr_chart2" id="cpuChart2"></div>
              </div>
            </div>
            <div class="pr_doItem2 pr_doItem3 haveBorder">
              <div class="pr_tit">显卡</div>
              <div class="pr_chartBox">
                <div class="pr_chart" id="cpuChart3"></div>
                <div class="pr_chart pr_chart2" id="cpuChart4"></div>
                <div class="pr_chart pr_chart2" id="cpuChart5"></div>
              </div>
            </div>
            <div class="pr_doItem2 pr_doItem4">
              <div class="pr_tit">内存</div>
              <div class="pr_chartBox">
                <div class="pr_chart" id="cpuChart6"></div>
              </div>
            </div>
          </div>
          <div class="pr_doInfo2">
            <div class="pr_doInfoSec">
              <div>{{showName}}</div>
              <div class="pr_doDown" @click="showSec=true;">
                <img class="os_downImg" src="~@/assets/img/side1/down.png" />
              </div>
              <ul class="pr_secBox" v-show="showSec">
                <li v-for="i in Items" @click="showName=i.name;showSec=false;">{{i.name}}</li>
              </ul>
            </div>
            <ul class="pr_leaBox">
              <li>
                <div class="pr_point pr_point1"></div>最大值
              </li>
              <li>
                <div class="pr_point pr_point2"></div>最小值
              </li>
              <li>
                <div class="pr_point pr_point3"></div>平均值
              </li>
            </ul>
          </div>
          <div class="pr_chartLineBox" id="tempLine"></div>
          <ul class="pr_projectBox">
              <li v-for="item,index in itemList"><img class="hw_ItemIcon" :class="'hw_ItemIcon'+index" :src="item.icon" /><span class="noMl">{{item.name}}</span><span v-html="item.desc"></span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameIcon from "@/assets/img/side2/gameIcon.png";
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
      showDetail: true,
      showName: "FPS",
      showSec: false,
      img: GameIcon,
       itemList: [
        {
          name: "系统",
          icon: ItemIcon1,
          desc: "Windows&nbsp;10&nbsp;64位"
        },
        {
          name: "处理器",
          icon: ItemIcon2,
          desc: "Windows&nbsp;10&nbsp;64位"
        },
        {
          name: "显卡",
          icon: ItemIcon3,
          desc: "Windows&nbsp;10&nbsp;64位"
        },
        {
          name: "主硬盘",
          icon: ItemIcon4,
         desc: "Windows&nbsp;10&nbsp;64位"
        },
        {
          name: "主板",
          icon: ItemIcon5,
          desc: "Windows&nbsp;10&nbsp;64位"
        },
        {
          name: "显示器",
          icon: ItemIcon6,
           desc: "Windows&nbsp;10&nbsp;64位"
        },
        {
          name: "内存",
          icon: ItemIcon7,
          desc: "Windows&nbsp;10&nbsp;64位"
        }
      ],
      Items: [
        {
          name: "FPS",
          average: 108,
          max: 289,
          min: 7
        },
        {
          name: "CPU占用",
          average: "21%",
          max: 89,
          min: 7
        },
        {
          name: "CPU温度",
          average: "60℃",
          max: 99,
          min: 50
        },
        {
          name: "GPU占用",
          average: "20%",
          max: 80,
          min: 7
        },
        {
          name: "GPU温度",
          average: "39℃",
          max: 99,
          min: 50
        },
        {
          name: "内存占用",
          average: "21%",
          max: 89,
          min: 7
        }
      ],
      logList: [
        {
          name: "",
          date: "2020-06-06",
          click: true
        },
        {
          name: "",
          date: "2020-06-07",
          click: false
        },
        {
          name: "",
          date: "2020-06-08",
          click: false
        },
        {
          name: "",
          date: "2020-06-10",
          click: false
        },
        {
          name: "",
          date: "2020-06-11",
          click: false
        }
      ],
      gameLogList: [
        {
          name: "英雄联盟LOL",
          date: "06:06",
          icon: GameIcon,
          duration: "1小时30分钟20秒",
          power: 1.58,
          co2: 1673.5,
          Items: [
            {
              name: "FPS",
              average: 108,
              max: 289,
              min: 7
            },
            {
              name: "CPU占用",
              average: "21%",
              max: 89,
              min: 7
            },
            {
              name: "CPU温度",
              average: "60℃",
              max: 99,
              min: 50
            },
            {
              name: "GPU占用",
              average: "20%",
              max: 80,
              min: 7
            },
            {
              name: "GPU温度",
              average: "39℃",
              max: 99,
              min: 50
            },
            {
              name: "内存占用",
              average: "21%",
              max: 89,
              min: 7
            }
          ]
        },
        {
          name: "英雄联盟LOL",
          date: "06:06",
          icon: GameIcon,
          duration: "1小时30分钟20秒",
          power: 1.58,
          co2: 1673.5,
          Items: [
            {
              name: "FPS",
              average: 108,
              max: 289,
              min: 7
            },
            {
              name: "CPU占用",
              average: "21%",
              max: 89,
              min: 7
            },
            {
              name: "CPU温度",
              average: "60℃",
              max: 99,
              min: 50
            },
            {
              name: "GPU占用",
              average: "20%",
              max: 80,
              min: 7
            },
            {
              name: "GPU温度",
              average: "39℃",
              max: 99,
              min: 50
            },
            {
              name: "内存占用",
              average: "21%",
              max: 89,
              min: 7
            }
          ]
        },
        {
          name: "英雄联盟LOL",
          date: "06:06",
          icon: GameIcon,
          duration: "1小时30分钟20秒",
          power: 1.58,
          co2: 1673.5,
          Items: [
            {
              name: "FPS",
              average: 108,
              max: 289,
              min: 7
            },
            {
              name: "CPU占用",
              average: "21%",
              max: 89,
              min: 7
            },
            {
              name: "CPU温度",
              average: "60℃",
              max: 99,
              min: 50
            },
            {
              name: "GPU占用",
              average: "20%",
              max: 80,
              min: 7
            },
            {
              name: "GPU温度",
              average: "39℃",
              max: 99,
              min: 50
            },
            {
              name: "内存占用",
              average: "21%",
              max: 89,
              min: 7
            }
          ]
        }
      ],
      setOption: {
        title: {
          text: "21%",
          textStyle: {
            color: "#ffffff",
            fontSize: 24
          },
          subtext: "占用率≈",
          subtextStyle: {
            color: "#083c68",
            fontSize: 10
          },
          itemGap: -6, // 主副标题距离
          left: "center",
          top: "center"
        },
        angleAxis: {
          max: 100, // 满分
          clockwise: false, // 逆时针
          // 隐藏刻度线
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        radiusAxis: {
          type: "category",
          // 隐藏刻度线
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        polar: {
          center: ["50%", "50%"],
          radius: "170%" //图形大小
        },
        series: [
          {
            type: "bar",
            data: [
              {
                name: "处理器占用",
                value: 21,
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      1,
                      0,
                      0,
                      0,
                      [
                        {
                          offset: 0,
                          color: "#19f9ee"
                        },
                        {
                          offset: 1,
                          color: "#f2c85e"
                        }
                      ]
                    )
                  }
                }
              }
            ],
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 8,
            barGap: "-100%", // 两环重叠
            z: 2
          },
          {
            // 灰色环
            type: "bar",
            data: [
              {
                value: 100,
                itemStyle: {
                  color: "#083c68",
                  shadowColor: "rgba(0, 0, 0, 0.2)",
                  shadowBlur: 5,
                  shadowOffsetY: 2
                }
              }
            ],
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 8,
            barGap: "-100%", // 两环重叠
            z: 1
          }
        ]
      }
    };
  },
  mounted() {
    var that = this;

    this.draw1();
    this.draw2();
    this.draw3();
    this.draw4();
    this.draw5();
    this.draw6();
    this.drawLine();
  },
  methods: {
    setTime(i) {
      this.logList.forEach(item => {
        item.click = false;
      });
      i.click = true;
    },
    draw1() {
      var that = this;
      let Chart = that.$echarts.init(document.getElementById("cpuChart1"));
      // 绘制图表
      Chart.setOption(that.setOption);
    },
    draw2() {
      var that = this;
      let Chart = that.$echarts.init(document.getElementById("cpuChart2"));
      // 绘制图表
      Chart.setOption(that.setOption);
    },
    draw3() {
      var that = this;
      let Chart = that.$echarts.init(document.getElementById("cpuChart3"));
      // 绘制图表
      Chart.setOption(that.setOption);
    },
    draw4() {
      var that = this;
      let Chart = that.$echarts.init(document.getElementById("cpuChart4"));
      // 绘制图表
      Chart.setOption(that.setOption);
    },
    draw5() {
      var that = this;
      let Chart = that.$echarts.init(document.getElementById("cpuChart5"));
      // 绘制图表
      Chart.setOption(that.setOption);
    },
    draw6() {
      var that = this;
      let Chart = that.$echarts.init(document.getElementById("cpuChart6"));
      // 绘制图表
      Chart.setOption(that.setOption);
    },
    drawLine() {
      var that = this;
      let tempChart = that.$echarts.init(document.getElementById("tempLine"));
      // 绘制图表
      tempChart.setOption({
        tooltip: {},
        grid: {
          x: "0", //x 偏移量
          y: "0", // y 偏移量
          width: "100%", // 宽度
          height: "90%" // 高度
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#094776",
              width: 2
            }
          },
          axisLabel: {
            textStyle: {
              color: "#10abff" //坐标值得具体的颜色
            }
          },
          data: []
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#094776",
              width: 2
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#094776"],
              width: 1,
              type: "solid"
            }
          },
          axisTick: {
            inside: false,
            length: 10,
            lineStyle: {
              width: 1
            }
          },
          scale: false
        },

        series: [
          {
            name: "temperature",
            type: "line",
            symbol: "none",
            smooth: true,
            areaStyle: {
              normal: {
                color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#10abff" },
                  { offset: 1, color: "#050b24" }
                ])
              }
            }, //填充区域样式
            lineStyle: {
              color: "#10abff"
            },
            itemStyle: {
              color: "#10abff"
            },
            data: [
              8,
              5,
              20,
              36,
              10,
              10,
              20,
              1,
              5,
              20,
              36,
              10,
              10,
              20,
              1,
              5,
              20,
              36,
              10,
              10,
              20
            ],
            markLine: {
              symbol: "none", //去掉箭头

              data: [
                {
                  name: "平均线",
                  // 支持 'average', 'min', 'max'
                  lineStyle: {
                    color: "#2efbc3"
                  },
                  type: "average"
                },
                {
                  name: "最小值",
                  // 支持 'average', 'min', 'max'
                  lineStyle: {
                    color: "#fe7f54"
                  },
                  type: "min"
                },
                {
                  name: "最大值",
                  // 支持 'average', 'min', 'max'
                  lineStyle: {
                    color: "#fde253"
                  },
                  type: "max"


                }
              ]
            }
          }
        ]
      });
    }
  }
};
</script>

<style lang='stylus' scoped>
.pe_contant {
  height 100%
  width 100%
  color #10a9fd
  padding-top 20px
  padding-left 40px
  position relative
  .pe_itemBox1 {
    height 20px
    width 100%
    display flex
    line-height 20px
    text-align center
    font-size 12px
    .pe_item {
      height 20px
      width 198px
      border 1px solid #10a9fd
      display flex
      .pe_itemName {
        width 82px
        border-right 1px solid #10a9fd
        box-shadow inset 0px 0px 4px 0px #10abff
      }
      .pe_itemValue {
        flex 1
        position relative
        .pe_icon {
          position absolute
          top 6px
          left 8px
        }
      }
    }
    .pe_item2 {
      width 158px
      margin-left 30px
      margin-right 30px
      .pe_itemValue {
        color #fde353
      }
    }
    .pe_item3 {
      width 208px
      .pe_itemName {
        width 122px
      }
      .pe_itemValue {
        color #fd7f53
      }
    }
    .pe_timer {
      height 20px
      width 100px
      text-align left
      padding-left 10px
      margin-left 104px
      border 1px solid #10a9fd
      box-shadow inset 0px 0px 4px 0px #10abff
      position relative
      cursor pointer
      .pe_icon {
        position absolute
        right 6px
        top 2px
      }
    }
  }
  .pe_timeLineBox {
    height 50px
    width 100%
    margin-top 20px
    position relative
    padding-top 24px
    .pe_timeLine {
      height 2px
      width 830px
      background #0b5f97
    }
    .pe_timePoint {
      height 6px
      width 6px
      border-radius 6px
      background #0b5f97
      position absolute
      left 0
      top 22px
      cursor pointer
      .pe_tpCon {
        height 100%
        width 100%
        position relative
        .pe_date {
          font-size 12px
          color #0b5f97
          width 64px
          height 16px
          position absolute
          top -20px
          left -32px
          text-align center
        }
        .pe_down {
          top 14px
        }
        .pe_icon {
          position absolute
          top -6px
          left 1px
        }
        .pe_downImg {
          top 10px
        }
      }
    }
    .white .pe_date {
      color #fff !important
    }
    .white {
      background #fff !important
    }
  }
  .pe_logBox {
    height 530px
    width 852px
    overflow auto
    margin-top 30px
    padding-top 20px
    .pe_logItem {
      height 274px
      width 832px
      background-color #141a36
      border solid 1px #10a9fd
      font-size 12px
      position relative
      margin-bottom 42px
      padding 10px
      .pe_logItems {
        width 100%
        height 140px
        display flex
        margin-top 20px
        .pe_inItem {
          height 138px
          width 90px
          background url('~@/assets/img/side2/itembg.png') no-repeat 100% 100%
          margin-left 44px
          padding 15px 0
          padding-right 2px
          .pe_itName {
            opacity 0.7
            padding-left 10px
          }
          .pe_itName2 {
            text-align right
            padding-right 10px
            margin-bottom 4px
          }
          .pe_samll {
            height 20px
            width 100%
            text-align left
            line-height 20px
            padding-left 10px
            border-top 1px solid #10a9fd
            span {
              display inline-block
              height 20px
              width 22px
              color #fff
              text-align right
              margin-left 26px
            }
          }
          .pe_average {
            color #fff
            font-size 26px
            font-weight 600
            width 100%
            text-align center
            margin-top 6px
            margin-bottom 6px
          }
        }
      }
      .pe_ltXq {
        width 38px
        height 18px
        background-color #10a9fd
        color #fff
        position absolute
        top 16px
        right 30px
        text-align center
        line-height 18px
        cursor pointer
      }
      .pe_ltDate {
        height 18px
        width 40px
        background-color #050b24
        border solid 1px #10aafd
        position absolute
        top -20px
        left 0
        text-align center
        line-height 18px
      }
      .pe_tips {
        height 20px
        width 100%
        display flex
        text-align center
        line-height 20px
        margin-top 10px
        .pe_tipsName {
          width 80px
          height 20px
          margin-right 10px
          margin-left 40px
          position relative
          .pe_icon {
            position absolute
            top 6px
            left 2px
          }
        }
        .pe_tipsValue {
          height 20px
          width 60px
          border solid 1px #10aafd
          margin-left 12px
          margin-right 10px
        }
        .pe_tipsOps {
          margin-left 30px
          opacity 0.7
        }
      }
    }
  }
  .hw_detailsPage {
    height 720px
    width 1080px
    background rgba(0, 0, 0, 0.5)
    position absolute
    top -50px
    left -190px
    // overflow hidden
    .hw_detailsCon {
      height 592px
      width 902px
      margin-left 100px
      margin-top 60px
      background #050b24
      position relative
      .hw_deTitle {
        height 38px
        width 100%
        line-height 38px
        background #141a36
        font-size 12px
        color #10abff
        padding-left 40px
        .hw_logo {
          height 20px
          position absolute
          top 8px
          left 10px
        }
        .hw_close {
          position absolute
          top 12px
          right 20px
          cursor pointer
        }
      }
      .pe_ltTop {
        height 60px
        border-bottom solid 1px #10aafd
        padding-top 10px
        padding-left 30px
        position relative
        .pe_ltTopBtn {
          height 18px
          width 60px
          color #fff
          background #10a9fd
          line-height 18px
          text-align center
          cursor pointer
          position absolute
          top 24px
          right 100px
        }
        .pe_ltTopBtn2 {
          background #050b24
          right 20px
          border 1px solid #10a9fd
          box-shadow inset 0px 0px 4px 0px #10abff
        }
        span {
          padding-top 16px
          margin-left 20px
        }
      }
    }
  }
  .pe_ltTop {
    height 32px
    width 100%
    display flex
    font-size 12px
    .pe_ltGameImg {
      height 32px
      width 32px
      background #172044
      border solid 1px #10a9fd
      border-radius 32px
      margin-right 10px
      .gs_gameIcon {
        height 30px
        width 30px
      }
    }
  }
  .pe_diItem {
    height 18px
    width 100%
    padding-left 30px
    margin-top 20px
    display flex
    font-size 12px
    .pe_diTips {
      width 92px
      height 18px
      border solid 1px #10a9fd
      display flex
      line-height 18px
      text-align center
      .pe_diLeft {
        width 60px
        height 100%
        border-right solid 1px #10a9fd
      }
      .pe_diRight {
        flex 1
        box-shadow inset 0px 0px 4px 0px #10abff
      }
    }
    .pe_xtips {
      margin-left 40px
      span {
        display inline-block
        position relative
        padding-left 12px
        color #fde353
        img {
          position absolute
          top 4px
          left 4px
        }
      }
      .pe_color2 {
        color #fd7f53
      }
    }
  }
  .pe_datailInfo {
    height 146px
    width 100%
    padding-left 30px
    display flex
    margin-top 20px
    font-size 12px
    .pr_doItem1 {
      width 116px
      .pr_value {
        height 91px
        width 91px
        padding-top 4px
        padding-left 5px
        background url('~@/assets/img/side2/fpsbg.png') no-repeat 120% 100%
        background-size contain
        margin-top 20px
        .pr_vcon {
          height 82px
          width 82px
          border-radius 92px
          box-shadow inset 0px 0px 30px 0px #10abff
          line-height 88px
          padding-left 16px
          font-size 28px
          color #fff
          font-weight 600
          background linear-gradient(to right, #07eeff, #468eff)
          -webkit-background-clip text
          color transparent
        }
      }
    }
    .pr_doItem2 {
      width 256px
      padding 0 25px
      .pr_chartBox {
        height 90px
        width 100%
        display flex
        margin-top 20px
        .pr_chart {
          width 90px
          height 90px
        }
        .pr_chart2 {
          margin-left 20px
        }
      }
    }
    .pr_doItem3 {
      width 360px
    }
    .pr_doItem4 {
      width 130px
    }
    .haveBorder {
      border-right solid 1px #10a9fd
    }
  }
  .pr_doInfo2 {
    height 20px
    width 100%
    padding-left 30px
    font-size 12px
    line-height 20px
    margin-top 20px
    position relative
    .pr_leaBox {
      height 20px
      width 240px
      position absolute
      top 0
      right 30px
      display flex
      li {
        flex 1
        position relative
        padding-left 18px
        .pr_point {
          height 12px
          width 12px
          border-radius 12px
          background #fde253
          position absolute
          top 4px
          left 0
        }
        .pr_point2 {
          background #fe7f54
        }
        .pr_point3 {
          background #2efbc3
        }
      }
    }
    .pr_doInfoSec {
      height 20px
      width 90px
      border solid 1px #10a9fd
      position relative
      padding-left 10px
      .pr_doDown {
        height 100%
        width 20px
        background #10a9fd
        position absolute
        top 0
        right 0
        cursor pointer
        .os_downImg {
          height 12px
          width 12px
          margin-top 4px
          margin-left 4px
        }
      }
      .pr_secBox {
        width 102%
        position absolute
        top 20px
        left -1px
        border solid 1px #10a9fd
        li {
          width 100%
          padding-left 10px
          height 20px
          border-bottom solid 1px #10a9fd
          cursor pointer
          &:hover {
            color #fff
            background #10a9fd
          }
        }
      }
    }
  }
  .pr_chartLineBox {
    width 812px
    height 114px
    margin-left 30px
    margin-top 20px
  }
  .pr_projectBox{
      width 812px;
      height 80px;
      margin-left 30px;
      margin-top 20px;
      li{
          height 40px;
          width 200px;
          float left;
          font-size 12px;
          line-height 40px;
          position relative;
          padding-left 30px;
          .hw_ItemIcon{
              height 24px;
              position absolute;
              top 6px;
              left 0;
          }
          .hw_ItemIcon6,.hw_ItemIcon2,.hw_ItemIcon3{
              height 18px;
              top 10px;
          }
          span{
              margin-left 20px;
              opacity .7
          }
          .noMl{
              margin-left 0;
          }
      }
  }
}
</style>