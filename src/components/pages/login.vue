<template>
  <div class="contant">
    <div class="loginContant">
      <img class="logo" src="~@/assets/img/login/logo.png" />
      <div class="loginTip">登录您的MACHENIKE账号</div>
      <!-- <img
        class="loginByWechat"
        @click="shoWechatLogin = true;"
        src="~@/assets/img/login/wechat.png"
      /> -->
      <!-- <div class="loginItem">
        <img class="orline orline1" src="~@/assets/img/login/orline.png" />
        <img class="orline orline2" src="~@/assets/img/login/orline.png" />
        or
      </div> -->
      <div class="loginItem loginItem2">
        <div class="tip">手机号码</div>
        <input class="loginInp" type="text" :class="phoneFail?'failInpCss':''" name="phone" @focus="phoneFail=true" />
        <div class="warningTips" v-show="phoneFail">请输入正确的手机号码</div>
      </div>
      <div class="loginItem loginItem2">
        <div class="tip">密码</div>
        <input class="loginInp password" :class="passwordFail?'failInpCss':''" :type="intType" name="password" @focus="passwordFail=true" />
        <img class="hiddenPwd" @click="changePwd" src="~@/assets/img/login/hiddenPwd.png" />
        <div class="warningTips"  v-show="passwordFail">密码错误</div>
      </div>
      <div class="loginItem loginItem2">
        <div class="tip">验证码</div>
        <input class="loginInp testCode" :class="testcodeFail?'failInpCss':''" type="text" name="testCode"  @focus="testcodeFail=true"/>
        <div class="testCodeArea">9527</div>
         <div class="warningTips" v-show="testcodeFail">验证码错误</div>
      </div>
      <div class="goBtn" @click="$router.push({ name: 'Index'});">登录</div>
      <div class="elseBox">
        <div class="forgetPwd">忘记密码?</div>
        <div class="tip">你已经拥有账户了吗？</div>
        <div class="register" @click="$router.push({ name: 'Register'});">注册</div>
      </div>
    </div>
    <div class="loginMask" v-show="shoWechatLogin">
      <div class="loginINwechat">
        <div class="titBar">
          <img @click="shoWechatLogin = false;" class="close2" src="~@/assets/img/login/close.png" />
        </div>
        <div class="maskTips">Log In To WeChat</div>
        <img class="ercode" src="~@/assets/img/login/ercode.png" />
        <div class="maskTips2">
          Scan QR Code in WeChat to log in
          <br />"Machenike"
        </div>
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
      phoneFail:false,
      passwordFail:false,
      testcodeFail:false
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
  padding-top 100px
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