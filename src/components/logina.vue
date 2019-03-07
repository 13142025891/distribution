<template>
   <div class="register">
    <iframe src="http://wx.liangyunkj.com/m/main">

    </iframe>
    <div class="mask"></div>
   </div>
</template>
<script>
import axios from "axios";
import nvLoading from "../common/loading";
import { API_ROOT } from "../api/config";
import { MessageBox } from "mint-ui";
export default {
  name: "logina",
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
   position: relative;
   .mask{
     width: 100px;
     height: 100px;
     background: red;
     position:absolute;
     
   }
  iframe{
      width: 100%;
      height: 100%;
    }
}

</style>
