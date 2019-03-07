<template>
  <div class="register">
    <div class="register_partner">配安合伙人</div>
    <form class="register_input">
      <section class="form_wrap">
        <span class="iconfont icon">&#xe641;</span>
        <input
          type="text"
          maxlength="20"
          placeholder="请输入手机号/客户号/登录名"
          v-model="ruleForm.userName"
        >
      </section>

      <section class="form_wrap">
        <span class="iconfont icon">&#xe62f;</span>
        <input
          type="password"
          maxlength="20"
          placeholder="输入密码"
          v-model="ruleForm.password"
        >
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
    <div class="forget">还没有账号？<router-link to="/register">立即注册</router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import nvLoading from "../common/loading";
import { API_ROOT } from "../api/config";
import { MessageBox } from "mint-ui";
export default {
  name: "login",
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
      SignIn: "登录",
      signInBg: false,
      // 定时器
      timer: null,
      countdown: 60,
      codeDisabled: false,
      loginUrl: ""
    };
  },
  components: {
    nvLoading,
    MessageBox
  },
  created() {},
  mounted() {
    if (
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)
    ) {
      this.loginUrl = "http://wx.liangyunkj.com/m/main";
    } else {
      this.loginUrl = "http://wx.liangyunkj.com/client/main";
    }
  },
  methods: {
    //点击登录调用方法
    submitForm(formName) {
      this.SignIn = "登录中~";
      this.signInBg = true;

      var pass = this.ruleForm.password;
      var userName = this.ruleForm.userName;

      if (userName == "" || userName == null) {
        this.SignIn = "登录";
        this.signInBg = false;
        this.message = "请输入用户名";
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
      }

      let url = "/api/Sapi/Login/index"; // API_ROOT + "/auth/login";
      let _this = this;
      axios({
        method: "POST",
        url: url,
        headers: {
          clienttype: "web"
        },
        data: {
          user_pwd: this.ruleForm.password,
          user_name: this.ruleForm.userName
        }
      })
        .then(function(res) {
          let rs = res.data;
          _this.SignIn = "登录";
          _this.signInBg = false;
          if (rs && rs.status === 1) {
            //sessionStorage.setItem("token", rs.data.token);
            //sessionStorage.setItem("level", 2);
            //_this.$router.push({ path: "/homePage" });
            //_this.message = rs.info;
            window.localStorage.setItem("sid", rs.sid);
            setTimeout(() => {
              window.location.href = _this.loginUrl;
            }, 1500);
          } else {
            _this.message = rs.info;
            setTimeout(() => {
              _this.message = "";
            }, 1500);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
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
  padding: 0 0.2rem;
  .register_partner {
    font-size: 0.48rem;
    color: #fff;
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
      background: rgba(255, 255, 255, 0.15);
      line-height: 1.15rem;
      margin-bottom: 0.2rem;
      //padding:
      .button-verify {
        background-color: transparent;
        height: 1.15rem;
        line-height: 1.15rem;

        max-width: 2rem;
        font-size: 0.32rem;
        color: #999;
      }

      .icon {
        position: absolute;
        left: 0;
        font-size: 0.32rem;
        left: 0.3rem;
        font-size: 0.3rem;
        color: #fff;
      }
      input {
        width: 100%;
        height: 100%;
        left: 0;
        padding-left: 1rem;
        //color: #333;
        -webkit-appearance: none;
        color: #ccc;
        background-color: transparent;
      }
      button {
        width: 100%;
        height: 0.88rem;
        border-radius: 0.1rem;
        // background-color: #ff9697;
        background-color: #409de5;
        font-size: 0.32rem;
        color: #fff;
        line-height: 0.88rem;
      }
      .signInBg {
        background-color: #ff9697;
      }
    }
    .form_wrap:last-child {
      margin-top: 0.6rem;
      background: transparent;
    }
  }
  .errMsg {
    height: 1rem;
    width: 100%;
    line-height: 1rem;
    display: block;
    text-align: center;
    color: #fff;
  }
  .forget {
    font-size: 0.3rem;
    color: #fff;
    width: 100%;
    text-align: center;
    cursor: pointer;
    a {
      color: #fff;
    }
  }
}
@media screen and (min-width: 600px) {
  .register {
    width: 600px;
    margin: 0 auto;
  }
}
</style>
