<template>
  <div class="contant">
    <div class="indexContant">
      <div class="index_welcome">HI!（xxx），欢迎来到control center !</div>
      <div class="index_tipBox">
        <div class="index_tipLeft">
          <div class="index_smallTip">若想体验更多有趣功能</div>
          <div class="index_smallTip2">
            <a href="https://www.machenike.com">www.machenike.com</a>
          </div>
        </div>
        <div class="index_tipRight">
          <div class="index_smallTip">欢迎下载GamePP!</div>
          <div class="index_smallTip2">
            <a href="https://www.machenike.com">www.machenike.com</a>
          </div>
        </div>
      </div>
      <div class="index_tips">公告：</div>
      <div class="index_noticeBox">
        <div class="index_noticeItem"></div>
        <div class="index_noticeItem index_noticeRight"></div>
      </div>
      <div class="index_tips2">完成您的账户注册（仅微信登录显示）</div>
      <div class="index_tips3">您的电子邮件地址尚未验证，只需几个简单的步骤就可以完成Machenike账户。</div>
      <div class="index_clickMe" @click="$router.push({ name: 'Personal'});">点击这里</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* index.html(首次登录) css start */
.indexContant {
  padding-left: 40px;
  overflow: hidden;
  padding-top: 40px;
  color: #10a9fd;
}
.index_welcome {
  width: 404px;
  height: 50px;
  background: url("../../assets/img/index/welcomebg.png") no-repeat 100% 100%;
  font-size: 16px;
  line-height: 50px;
  padding-left: 20px;
}
.index_tipBox {
  height: 24px;
  margin-top: 40px;
  position: relative;
  font-size: 12px;
  line-height: 22px;
}
.index_tipLeft {
  width: 276px;
  height: 100%;
  border: solid 1px #10a9fd;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
}
.index_tipBox a {
  display: block;
  color: #fff;
}
.index_tipLeft div {
  flex: 1;
  text-align: center;
}
.index_tipLeft a {
  color: #fff;
  background: #10a9fd;
  cursor: pointer;
}
.index_tipRight {
  width: 254px;
  height: 100%;
  border: solid 1px #10a9fd;
  display: flex;
  position: absolute;
  left: 406px;
  top: 0;
}
.index_tipRight div {
  width: 116px;
  text-align: center;
}
.index_tipRight .index_smallTip2 {
  width: 138px;
  color: #fff;
  background: #10a9fd;
  cursor: pointer;
}
.index_tips {
  font-size: 16px;
  margin: 20px 0 10px 0;
}
.index_noticeBox {
  height: 188px;
  display: flex;
  margin-bottom: 40px;
}
.index_noticeItem {
  width: 380px;
  background: url("/static/bg.png") no-repeat 100% 100%;
}
.index_noticeRight {
  margin-left: 50px;
}
.index_tips2 {
  font-size: 14px;
  margin-bottom: 6px;
}
.index_tips3 {
  font-size: 12px;
  margin-bottom: 10px;
}
.index_clickMe {
  font-size: 12px;
  width: 68px;
  height: 24px;
  line-height: 22px;
  border: solid 1px #10abff;
  text-align: center;
  box-shadow: inset 0px 0px 5px 1px #10abff;
  cursor: pointer;
}
/* index.html(首次登录) css end */
</style>
