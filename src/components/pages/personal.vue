<template>
  <div class="contant">
    <div class="personalContant">
      <div class="pre_headBox">
        <img class="per_headImg" src="../../assets/img/personal/headborder.png" />
      </div>
      <div class="pre_tips">个人信息</div>
      <div class="pre_item">
        <div class="pre_itemTip">昵称</div>
        <input class="pre_inp" type="text" name="nickName" />
      </div>
      <div class="pre_item">
        <div class="pre_itemTip">邮箱</div>
        <input class="pre_inp" type="text" name="nickName" />
        <div class="pre_testBtn pre_send">重新发送</div>
      </div>
      <div class="pre_item pre_tipDown">
        <input class="pre_inp" type="text" name="nickName" />
        <div class="pre_itemTip">激活码已发送至邮箱</div>
        <div class="pre_testBtn">验证</div>
      </div>
      <div class="pre_tips">账号绑定</div>
      <div class="pre_wechat">
        <img class="per_wechatImg" src="../../assets/img/personal/wechat.png" />
        <img class="per_bindImg" src="../../assets/img/personal/wechatyes.png" />
        <div class="pre_bind">绑定</div>
      </div>
      <div class="pre_tips">修改密码</div>
      <div class="pre_item">
        <div class="pre_itemTip">当前密码</div>
        <input class="pre_inp" :type="oldPasswordType" name="oldPassword" />
        <img class="hiddenPwd" @click="changePwd(1)" src="../../assets/img/login/hiddenPwd.png" />
      </div>
      <div class="pre_item">
        <div class="pre_itemTip">新密码</div>
        <input class="pre_inp" :type="newPasswordType" name="newPassword" />
        <img class="hiddenPwd" @click="changePwd(2)" src="../../assets/img/login/hiddenPwd.png" />
      </div>
      <div class="pre_item">
        <div class="pre_itemTip">再次输入</div>
        <input class="pre_inp" :type="newPasswordType2" name="newPassword" />
        <img class="hiddenPwd" @click="changePwd(3)" src="../../assets/img/login/hiddenPwd.png" />
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
      oldPasswordType: "password",
      newPasswordType: "password",
      newPasswordType2: "password"
    };
  },
  mounted() {
    var that = this;
  },
  methods: {
    changePwd(who) {
      var that = this;
      switch (who) {
        case 1:
          if (that.oldPasswordType == "password") {
            that.oldPasswordType = "text";
          } else {
            that.oldPasswordType = "password";
          }
          break;
        case 2:
          if (that.newPasswordType == "password") {
            that.newPasswordType = "text";
          } else {
            that.newPasswordType = "password";
          }
          break;
        case 3:
          if (that.newPasswordType2 == "password") {
            that.newPasswordType2 = "text";
          } else {
            that.newPasswordType2 = "password";
          }
          break;
      }
    }
  }
};
</script>

<style lang='stylus' scoped>
/* personal.html(个人信息) css start */
.personalContant {
  width 300px
  height 100%
  position relative
  margin 0 auto
  /* background: red; */
  padding-top 22px
  color #10a9fd
  .pre_wechat {
    width 100%
    height 40px
    position relative
    margin-top 10px
    margin-bottom 20px
    .per_bindImg {
      position absolute
      top 14px
      right 45px
    }
    .pre_bind {
      position absolute
      top 12px
      right 14px
      font-size 12px
      color #3fcf77
    }
  }
}
.pre_headBox {
  height 124px
  width 130px
  position absolute
  top 22px
  left -160px
}
.pre_tips {
  font-size 12px
  width 80px
  height 24px
  line-height 22px
  border solid 1px #10abff
  text-align center
  box-shadow inset 0px 0px 5px 1px #10abff
  cursor pointer
}
.pre_item {
  width 300px
  height 54px
  margin-top 12px
  position relative
  .hiddenPwd {
    top 34px
    right 18px
  }
}
.pre_inp {
  display block
  margin 0 auto
  width 300px
  height 40px
  border-radius 2px
  background-color #141a36
  color #10abff
  font-size 14px
  padding 0 10px
}
.pre_inp:focus {
  border solid 1px #10abff
}
.pre_item .pre_itemTip {
  font-size 12px
  text-align left
  margin-bottom 4px
}
.pre_tipDown {
  margin-top 30px !important
  margin-bottom 20px
}
.pre_tipDown .pre_itemTip {
  margin-bottom 0 !important
  margin-top 4px
}
.pre_testBtn {
  height 40px
  width 80px
  color #fff
  line-height 40px
  text-align center
  font-size 12px
  background #10a9fd
  border-radius 2px
  position absolute
  top 0
  right -110px
  cursor pointer
}
.pre_send {
  color #10a9fd
  background none
  border solid 1px #10a9fd
  top 20px
}
/* personal.html(个人信息) css end */
</style>