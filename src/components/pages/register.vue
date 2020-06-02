<template>
  <div class="contant">
    <div class="loginContant">
      <div class="registerTit">手机注册</div>
      <div class="loginItem loginItem2">
        <div class="tip">手机号码</div>
        <input class="loginInp" type="text" name="email" :class="phoneFail?'failInpCss':''" />
        <div class="warningTips" v-show="phoneFail">请输入正确的手机号码</div>
      </div>
      <div class="loginItem loginItem2">
        <div class="tip">密码</div>
        <input class="loginInp password" :type="intType" name="password" :class="passwordFail?'failInpCss':''" />
        <img class="hiddenPwd" @click="changePwd" src="~@/assets/img/login/hiddenPwd.png" />
        <div class="warningTips" v-show="passwordFail">密码错误</div>
      </div>
      <div class="loginItem loginItem2">
        <div class="tip">确认密码</div>
        <input class="loginInp password" :type="intType" name="password" :class="password2Fail?'failInpCss':''" />
        <img class="hiddenPwd" @click="changePwd" src="~@/assets/img/login/hiddenPwd.png" />
        <div class="warningTips" v-show="password2Fail">两次输入密码不一致</div>
      </div>
      <div class="loginItem loginItem2">
        <div class="tip">验证码</div>
        <input class="loginInp testCode" type="text" name="testCode" :class="testcodeFail?'failInpCss':''" />
        <div class="testCodeArea">9527</div>
        <div class="warningTips" v-show="testcodeFail">验证码不正确</div>
      </div>
       <div class="loginItem loginItem2">
        <div class="tip">短信验证码</div>
        <input class="loginInp testCode" type="text" name="testCode" :class="messageFail?'failInpCss':''" />
        <div class="testCodeArea testCodeArea2">获取短信验证码</div>
         <div class="warningTips" v-show="messageFail">短信验证码不正确</div>
      </div>
      <div class="goBtn" @click="$router.push({ name: 'Index'});">同意协议并注册</div>
      <div class="elseBox">
        <div class="tip">我已注册，现在就</div>
        <div class="register" @click="$router.push({ name: 'Login'});">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      shoWechatLogin: false,
      intType: "password",
      phoneFail:true,
      passwordFail:true,
      password2Fail:true,
      messageFail:true,
      testcodeFail:true

    };
  },
  mounted() {
    var that = this;
  },
  methods: {
    changePwd() {
      var that = this;
      if (that.intType == "password") {
        that.intType = "text";
      } else {
        that.intType = "password";
      }
    },
    linkTo(name) {
      this.$router.push({ name: "Index" });
    }
  }
};
</script>

<style lang='stylus' scoped>
/* login.html(登录页) css start */
.loginContant {
  width 350px
  height 100%
  margin 0 auto
  padding-top 40px
}
.registerTit{
    margin: 0 auto;
    width: 348px;
    height: 46px;
    margin-bottom 40px;
    font-size 16px;
    color #10abff
    line-height 46px;
    text-align center;
    border solid 1px #10abff
    box-shadow inset 0px 0px 30px 1px #10abff
    border-radius 3px;
}
.logo {
  display block
  margin 0 auto
}
.loginTip {
  color #10abff
  height 24px
  text-align center
  padding-top 10px
  font-size 14px
  margin-bottom 20px
}
.loginByWechat {
  cursor pointer
}
.orline {
  position absolute
  top 20px
}
.orline1 {
  left 2px
}
.orline2 {
  right 2px
}
.goBtn {
  width 348px
  height 48px
  line-height 48px
  text-align center
  font-size 16px
  color #fff
  line-height 48px
  background #10abff
  border-radius 2px
  margin 0 auto
  margin-top 20px
  letter-spacing 4px
  cursor pointer
}
.testCode {
  margin 0
  width 232px
  cursor pointer
}
.testCodeArea {
  width 116px
  height 46px
  position absolute
  top 20px
  right 1px
  background #fff
  border-radius 2px
  font-size 22px
  line-height 46px
  letter-spacing 6px
  color #10abff
  text-align center
  cursor pointer
}
.testCodeArea2{
  font-size 14px;
  letter-spacing 0px
  border solid 1px #10abff
  background #050b24
  box-shadow inset 0px 0px 5px 1px #10abff
}
.elseBox {
  width 348px
  height 22px
  margin 0 auto
  position relative
  margin-top 14px
}
.elseBox div {
  height 22px
  line-height 20px
  position absolute
  top 0
  letter-spacing 2px
  color #10abff
  font-size 12px
  text-align center
  border-radius 2px
}
.forgetPwd {
  width 84px
  border-radius 2px
  border solid 1px #10abff
  cursor pointer
}
.register {
  right 1px
  width 40px
  border solid 1px #10abff
  text-align center
  box-shadow inset 0px 0px 5px 1px #10abff
  cursor pointer
}
.elseBox .tip {
  right 46px
  color #fff
}
.loginMask {
  height 100%
  width 100%
  position absolute
  top 0
  left 0
  background rgba(0, 0, 0, 0.5)
}
.loginINwechat {
  width 350px
  height 536px
  background #131a35
  position absolute
  top 90px
  right 270px
}
.titBar {
  width 100%
  height 48px
  box-shadow inset 0px 0px 15px 15px #133e66
  position relative
}
.titBar .close2 {
  position absolute
  top 18px
  right 18px
  cursor pointer
}
.maskTips {
  color #10abff
  margin-top 60px
  font-size 14px
  text-align center
}
.ercode {
  display block
  margin 0 auto
  width 220px
  margin-top 30px
}
.maskTips2 {
  width 220px
  height 60px
  color #10abff
  background #050b24
  border-radius 30px
  margin 0 auto
  font-size 12px
  text-align center
  padding 15px 0
  margin-top 20px
}
/* login.html(登录页) css end */
</style>