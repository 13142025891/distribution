<template>
  <div class="register">
    <div class="register_partner">配安合伙人</div>
    <form class="register_input">
      <section class="form_wrap">
        <span class="iconfont icon">&#xe62c;</span>
        <input type="text" maxlength="20" placeholder="用户名" v-model="ruleForm.userName">
      </section>
      <section class="form_wrap">
        <span class="iconfont icon">&#xe62c;</span>
        <input type="tel" maxlength="11" placeholder="输入手机号" v-model="ruleForm.phoneNmuber">
      </section>
      <section class="form_wrap verify-wrapper">
        <span class="iconfont icon">&#xe61d;</span>
        <input type="text" maxlength="11" placeholder="输入验证码" v-model="ruleForm.verify">
        
        <button
          class="button-verify"
          type="button"
          @click="getCaptcha"
          :disabled="codeDisabled"
        >{{verifyBtn}}</button>
      </section>
      <section class="form_wrap">
        <span class="iconfont icon">&#xe61d;</span>
        <input type="password" maxlength="11" placeholder="输入密码" v-model="ruleForm.password">
      </section>
      <section class="form_wrap">
        <button
          class="signIn"
          @click="submitForm"
          type="button"
          :class="{signInBg:signInBg}"
        >{{SignIn}}</button>
      </section>
    </form>
    <transition name="fade">
      <div class="errMsg">{{message}}</div>
    </transition>
    <div class="forget" @click="alertMesage">忘记密码？(联系客服)</div>
    <div></div>
  </div>
</template>
<script>
import axios from "axios";
import nvLoading from "../common/loading";
import { API_ROOT } from "../api/config";
import { MessageBox } from "mint-ui";
export default {
  name: "register",
  data() {
    return {
      ruleForm: {
        phoneNmuber: "",
        password: "",
        verify: "",
        userName: ""
      },
      verifyBtn: "获取验证码",
      message: "",
      SignIn: "注册",
      signInBg: false,
      // 定时器
      timer: null,
      countdown: 60,
      codeDisabled: false
    };
  },
  components: {
    nvLoading,
    MessageBox
  },
  created() {},
  mounted() {},
  methods: {
    //点击登录调用方法
    submitForm(formName) {
      this.SignIn = "正在注册~";
      this.signInBg = true;
      var name = this.ruleForm.phoneNmuber;
      var pass = this.ruleForm.password;
      var userName = this.ruleForm.userName;
      var verify = this.ruleForm.verify;
      var pattern = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (name == "" || name == null || !pattern.test(name)) {
        this.SignIn = "登录";
        this.signInBg = false;
        this.message = "请输入正确手机号";
        setTimeout(() => {
          this.message = "";
        }, 1500);
        return;
      } else if (pass == "" || pass == null) {
        this.SignIn = "登录";
        this.signInBg = false;
        this.message = "请输入正确的密码";
        setTimeout(() => {
          this.message = "";
        }, 1500);
        return;
      } else if (userName == "" || userName == null) {
        this.SignIn = "登录";
        this.signInBg = false;
        this.message = "请输入用户名";
        setTimeout(() => {
          this.message = "";
        }, 1500);
        return;
      } else if (verify == "" || verify == null) {
        this.SignIn = "登录";
        this.signInBg = false;
        this.message = "请输入验证码";
        setTimeout(() => {
          this.message = "";
        }, 1500);
        return;
      }

      let url = "/api/Sapi/Reg/index"; // API_ROOT + "/auth/login";
      let _this = this;
      axios({
        method: "POST",
        url: url,
        headers: {
          clienttype: "pc"
        },
        data: {
          mobile: this.ruleForm.phoneNmuber,
          user_pwd: this.ruleForm.password,
          mobile_verify: this.ruleForm.verify,
          user_name: this.ruleForm.userName
        }
      })
        .then(function(res) {
          let rs = res;
          _this.SignIn = "登录";
          _this.signInBg = false;
          if (rs && rs.status === 1) {
            //sessionStorage.setItem("token", rs.data.token);
            //sessionStorage.setItem("level", 2);
            //_this.$router.push({ path: "/homePage" });
            _this.message = rs.info;
            setTimeout(() => {
              this.message = "";
            }, 1500);
          } else {
            _this.message = rs.info;
            setTimeout(() => {
              this.message = "";
            }, 1500);
          }

          // else if (rs.code == 4002) {
          //   _this.message = rs.msg;
          //   setTimeout(() => {
          //     _this.message = "";
          //   }, 1500);
          // } else {
          //   _this.message = rs.msg;
          //   setTimeout(() => {
          //     _this.message = "";
          //   }, 1500);
          // }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getCaptcha() {
      var name = this.ruleForm.phoneNmuber;

      var pattern = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (name == "" || name == null || !pattern.test(name)) {
        this.message = "请输入正确手机号";
        setTimeout(() => {
          this.message = "";
        }, 1500);
        return;
      }

      let url = "/api/Sapi/Code/sendex"; // API_ROOT + "/auth/login";
      let _this = this;
      axios({
        method: "POST",
        url: url,
        headers: {
          clienttype: "pc"
        },
        data: {
          mobile: this.ruleForm.phoneNmuber,
          type: "register"
        }
      })
        .then(function(res) {
          _this.setTime();
          let rs = res;
          _this.SignIn = "登录";
          _this.signInBg = false;
          if (rs && rs.status === 1) {
            _this.message = rs.info;
            setTimeout(() => {
              _this.message = "";
            }, 1500);
          } else {
            _this.message = rs.info || "获取短信验证码失败";
            setTimeout(() => {
              _this.message = "";
            }, 1500);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    setTime() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.countdown > 0 && this.countdown <= 60) {
            this.countdown--;
            if (this.countdown !== 0) {
              this.verifyBtn = "重新发送(" + this.countdown + ")";
            } else {
              clearInterval(this.timer);
              this.verifyBtn = "获取验证码";
              this.countdown = 60;
              this.timer = null;
              this.codeDisabled = false;
            }
          }
        }, 1000);
      }
    },
    alertMesage() {
      MessageBox("联系客服", "微信号：SuperToutiao");
    }
  }
};
</script>
<style scoped lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.register {
  padding: 0 0.6rem;
  .register_partner {
    font-size: 0.48rem;
    color: #000;
    font-weight: 600;
    margin-top: 1.5rem;
  }
  .register_input {
    margin-top: 0.54rem;
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
    .verify-wrapper {
      display: flex;
      input {
        flex: 1;
      }
    }
    .form_wrap {
      position: relative;
      height: 1.15rem;
      font-size: 0.32rem;
      background: #fff;
      line-height: 1.15rem;
      .button-verify {
        border: 1px solid #ccc;
        border-radius: 0.06rem;
        height: 0.8rem;
        line-height: 0.5rem;
        padding: 0.1rem;
        margin-top: 10px;
        max-width: 2rem;
        font-size: 0.16rem;
      }

      .icon {
        position: absolute;
        left: 0;
        font-size: 0.32rem;
      }
      input {
        width: 100%;
        height: 100%;
        left: 0;
        padding-left: 0.64rem;
        border-bottom: 1px solid #ddd;
        color: #333;
        -webkit-appearance: none;
      }
      button {
        width: 100%;
        height: 0.88rem;
        border-radius: 0.1rem;
        // background-color: #ff9697;
        background-color: #d53c3e;
        font-size: 0.32rem;
        color: #fff;
        line-height: 0.88rem;
      }
      .signInBg {
        background-color: #ff9697;
      }
    }
    .form_wrap:last-child {
      margin-top: 0.8rem;
    }
  }
  .errMsg {
    height: 1rem;
    width: 100%;
    line-height: 1rem;
    display: block;
    text-align: center;
  }
  .forget {
    font-size: 0.3rem;
    color: #d53c3e;
    width: 100%;
    text-align: center;
    margin-top: 1rem;
  }
}
</style>
