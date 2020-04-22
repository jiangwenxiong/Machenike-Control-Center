<template>
   <div class="sideBar">
                <img class="sideBg" src="../../assets/img/sidebar/sideBg.png" />
                <ul class="sideBox">
                    <li class="loginCon">
                        <img class="loginIcon" src="../../assets/img/sidebar/loginicon.png" />
                        <div class="loginTit">
                            <span class="loginCN">登&nbsp;&nbsp;录</span><br>
                            <span class="loginEN">SIGN&nbsp;IN</span>
                        </div>
                        <img class="line lineLong" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem">
                        <img class="icon" src="../../assets/img/sidebar/sideicon1.png" />
                        <div class="itemName">硬件监控</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem">
                        <img class="icon" src="../../assets/img/sidebar/sideicon2.png" />
                        <div class="itemName">游戏加速</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem">
                        <img class="icon" src="../../assets/img/sidebar/sideicon3.png" />
                        <div class="itemName">灯光控制</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem">
                        <img class="icon" src="../../assets/img/sidebar/sideicon4.png" />
                        <div class="itemName">官方驱动</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem">
                        <img class="icon" src="../../assets/img/sidebar/sideicon5.png" />
                        <div class="itemName">硬核软件</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                    <li class="sideItem">
                        <img class="icon" src="../../assets/img/sidebar/sideicon6.png" />
                        <div class="itemName">机友聚集地</div>
                        <img class="line" src="../../assets/img/sidebar/line.png" />
                    </li>
                </ul>
            </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      msg: 'SideBar Mounted'
    }
  },
  mounted (){
    var that = this;
    console.log(that.msg)
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
/* sideBar start */
.sideBar{
    width: 188px;
    height: 100%;
    position: relative;
}
.sideBg{
    width: 100%;
}
.sideBox{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.sideBox li{
    position: relative;
    height:54px;
    color: #10abff;
    font-size: 12px;
    cursor: pointer;
}
.sideBox .loginCon{
    height: 86px;
}
.sideBox .loginCon .loginIcon{
    height: 48px;
    position: absolute;
    top: 16px;
    left: 30px;
}
.sideBox .loginCon .loginTit{
    height: 40px;
    width: 100px;
    color: #10abff;
    position: absolute;
    top: 22px;
    left: 100px;
}
.loginCN{
    font-size: 18px;
}
.loginEN{
    font-size: 12px;
}
.line{
    position: absolute;
    bottom: 0;
    left: 36px;
}
.lineLong{
    width:130px;
    left: 30px;
}
.sideItem .icon{
    height: 24px;
    position: absolute;
    top:15px;
    left: 50px;

}
.itemName{
    position: absolute;
    top:18px;
    left:84px;
}

/* sideBar start */

</style> 
