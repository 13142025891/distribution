webpackJsonp([1],{"2YRk":function(e,t){},Llex:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:this.transitionName}},[t("router-view",{staticClass:"view-container"})],1)],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App",data:function(){return{transitionName:"slide-left"}},watch:{$route:function(){var e=this.$router.isBack;this.transitionName=e?"slide-right":"slide-left",this.$router.isBack=!1}}},i,!1,function(e){n("uyAF")},"data-v-0f23d5e0",null).exports,o=n("/ocq"),a=n("mtWM"),u=n.n(a),l={replace:!0,data:function(){return{}},props:{loading:{type:Boolean,default:!1}},mounted:function(){},methods:{}},c={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"loading"},[this._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"indicator"},[n("div",{staticClass:"indicator-wrapper",staticStyle:{padding:"10px"}},[n("span",{staticClass:"indicator-spin"},[n("div",{staticClass:"spinner-snake",staticStyle:{"border-top-color":"#fff","border-left-color":"#fff","border-bottom-color":"#fff",height:"32px",width:"32px"}})]),e._v(" "),n("span",{staticClass:"indicator-text"},[e._v("加载中...")])]),e._v(" "),n("div",{staticClass:"indicator-mask"})])}]};var m=n("VU/8")(l,c,!1,function(e){n("2YRk")},"data-v-c2d8e994",null).exports,d=("".concat("http://openapi.9yon.com/distribution"),n("Au9i")),g=n.n(d),p={name:"register",data:function(){return{ruleForm:{phoneNmuber:"",password:"",verify:"",userName:""},verifyBtn:"获取验证码",message:"",SignIn:"注册",signInBg:!1,timer:null,countdown:60,codeDisabled:!1,loginUrl:""}},components:{nvLoading:m,MessageBox:d.MessageBox},created:function(){},mounted:function(){/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)?this.loginUrl="http://wx.liangyunkj.com/m/userLogin":this.loginUrl="http://wx.liangyunkj.com/client/login"},methods:{submitForm:function(e){var t=this;this.SignIn="正在注册~",this.signInBg=!0;var n=this.ruleForm.phoneNmuber,s=this.ruleForm.password,i=this.ruleForm.userName,r=this.ruleForm.verify;if(""==i||null==i)return this.SignIn="注册",this.signInBg=!1,this.message="请输入用户名",void setTimeout(function(){t.message=""},1500);if(""==n||null==n||!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(n))return this.SignIn="注册",this.signInBg=!1,this.message="请输入正确手机号",void setTimeout(function(){t.message=""},1500);if(""==r||null==r)return this.SignIn="注册",this.signInBg=!1,this.message="请输入验证码",void setTimeout(function(){t.message=""},1500);if(""==s||null==s)return this.SignIn="注册",this.signInBg=!1,this.message="请输入正确的密码",void setTimeout(function(){t.message=""},1500);var o=this;u()({method:"POST",url:"/api/Sapi/Reg/index",headers:{clienttype:"web"},data:{mobile:this.ruleForm.phoneNmuber,user_pwd:this.ruleForm.password,mobile_verify:this.ruleForm.verify,user_name:this.ruleForm.userName,rel_user:5796}}).then(function(e){var t=e.data;o.SignIn="注册",o.signInBg=!1,t&&1===t.status?(alertMesage("注册成功"),setTimeout(function(){window.location.href=o.loginUrl},1500)):(o.message=t.info,setTimeout(function(){o.message=""},1500))}).catch(function(e){console.log(e)})},getCaptcha:function(){var e=this,t=this.ruleForm.phoneNmuber;if(""==t||null==t||!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(t))return this.message="请输入正确手机号",void setTimeout(function(){e.message=""},1500);var n=this;u()({method:"POST",url:"/api/Sapi/Code/sendex",headers:{clienttype:"pc"},data:{mobile:this.ruleForm.phoneNmuber,type:"register"}}).then(function(e){n.setTime();var t=e.data;n.SignIn="注册",n.signInBg=!1,t&&1===t.status?(n.message=t.info,setTimeout(function(){n.message=""},1500)):(n.message=t.info||"获取短信验证码失败",setTimeout(function(){n.message=""},1500))}).catch(function(e){console.log(e)})},setTime:function(){var e=this;this.timer||(this.timer=setInterval(function(){e.countdown>0&&e.countdown<=60&&(e.countdown--,0!==e.countdown?e.verifyBtn="重新发送("+e.countdown+")":(clearInterval(e.timer),e.verifyBtn="获取验证码",e.countdown=60,e.timer=null,e.codeDisabled=!1))},1e3))},alertMesage:function(){Object(d.MessageBox)("联系客服","微信号：SuperToutiao")}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register"},[n("div",{staticClass:"register_partner"},[e._v("配安合伙人")]),e._v(" "),n("form",{staticClass:"register_input"},[n("section",{staticClass:"form_wrap"},[n("span",{staticClass:"iconfont icon"},[e._v("")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.userName,expression:"ruleForm.userName"}],attrs:{type:"text",maxlength:"20",placeholder:"用户名"},domProps:{value:e.ruleForm.userName},on:{input:function(t){t.target.composing||e.$set(e.ruleForm,"userName",t.target.value)}}})]),e._v(" "),n("section",{staticClass:"form_wrap"},[n("span",{staticClass:"iconfont icon"},[e._v("")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.phoneNmuber,expression:"ruleForm.phoneNmuber"}],attrs:{type:"tel",maxlength:"11",placeholder:"输入手机号"},domProps:{value:e.ruleForm.phoneNmuber},on:{input:function(t){t.target.composing||e.$set(e.ruleForm,"phoneNmuber",t.target.value)}}})]),e._v(" "),n("section",{staticClass:"form_wrap verify-wrapper"},[n("span",{staticClass:"iconfont icon"},[e._v("")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.verify,expression:"ruleForm.verify"}],attrs:{type:"text",maxlength:"8",placeholder:"输入验证码"},domProps:{value:e.ruleForm.verify},on:{input:function(t){t.target.composing||e.$set(e.ruleForm,"verify",t.target.value)}}}),e._v(" "),n("button",{staticClass:"button-verify",attrs:{type:"button",disabled:e.codeDisabled},on:{click:e.getCaptcha}},[e._v(e._s(e.verifyBtn))])]),e._v(" "),n("section",{staticClass:"form_wrap"},[n("span",{staticClass:"iconfont icon"},[e._v("")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.password,expression:"ruleForm.password"}],attrs:{type:"password",maxlength:"11",placeholder:"输入密码"},domProps:{value:e.ruleForm.password},on:{input:function(t){t.target.composing||e.$set(e.ruleForm,"password",t.target.value)}}})]),e._v(" "),n("section",{staticClass:"form_wrap"},[n("button",{staticClass:"signIn",class:{signInBg:e.signInBg},attrs:{type:"button"},on:{click:e.submitForm}},[e._v(e._s(e.SignIn))])])]),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"errMsg"},[e._v(e._s(e.message))])]),e._v(" "),n("div",{staticClass:"forget"},[n("router-link",{attrs:{to:"/"}},[e._v("已有账号去登陆!")])],1)],1)},staticRenderFns:[]};var f=n("VU/8")(p,v,!1,function(e){n("Llex")},"data-v-3f0f8fd4",null).exports,h={name:"login",data:function(){return{ruleForm:{phoneNmuber:"",password:"",verify:"",userName:""},verifyBtn:"获取验证码",message:"",SignIn:"登录",signInBg:!1,timer:null,countdown:60,codeDisabled:!1,loginUrl:""}},components:{nvLoading:m,MessageBox:d.MessageBox},created:function(){},mounted:function(){/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)?this.loginUrl="http://wx.liangyunkj.com/m/main":this.loginUrl="http://wx.liangyunkj.com/client/main"},methods:{submitForm:function(e){var t=this;this.SignIn="登录中~",this.signInBg=!0;var n=this.ruleForm.password,s=this.ruleForm.userName;if(""==s||null==s)return this.SignIn="登录",this.signInBg=!1,this.message="请输入用户名",void setTimeout(function(){t.message=""},1500);if(""==n||null==n)return this.SignIn="登录",this.signInBg=!1,this.message="请输入正确的密码",void setTimeout(function(){t.message=""},1500);var i=this;u()({method:"POST",url:"/api/Sapi/Login/index",headers:{clienttype:"web"},data:{user_pwd:this.ruleForm.password,user_name:this.ruleForm.userName}}).then(function(e){var t=e.data;i.SignIn="登录",i.signInBg=!1,t&&1===t.status?(window.localStorage.setItem("sid",t.sid),setTimeout(function(){window.location.href=i.loginUrl},1500)):(i.message=t.info,setTimeout(function(){i.message=""},1500))}).catch(function(e){console.log(e)})},alertMesage:function(){Object(d.MessageBox)("联系客服","微信号：SuperToutiao")}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register"},[n("div",{staticClass:"register_partner"},[e._v("配安合伙人")]),e._v(" "),n("form",{staticClass:"register_input"},[n("section",{staticClass:"form_wrap"},[n("span",{staticClass:"iconfont icon"},[e._v("")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.userName,expression:"ruleForm.userName"}],attrs:{type:"text",maxlength:"20",placeholder:"请输入手机号/客户号/登录名"},domProps:{value:e.ruleForm.userName},on:{input:function(t){t.target.composing||e.$set(e.ruleForm,"userName",t.target.value)}}})]),e._v(" "),n("section",{staticClass:"form_wrap"},[n("span",{staticClass:"iconfont icon"},[e._v("")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.password,expression:"ruleForm.password"}],attrs:{type:"password",maxlength:"20",placeholder:"输入密码"},domProps:{value:e.ruleForm.password},on:{input:function(t){t.target.composing||e.$set(e.ruleForm,"password",t.target.value)}}})]),e._v(" "),n("section",{staticClass:"form_wrap"},[n("button",{staticClass:"signIn",class:{signInBg:e.signInBg},attrs:{type:"button"},on:{click:e.submitForm}},[e._v(e._s(e.SignIn))])])]),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"errMsg"},[e._v(e._s(e.message))])]),e._v(" "),n("div",{staticClass:"forget"},[e._v("还没有账号？"),n("router-link",{attrs:{to:"/register"}},[e._v("立即注册")])],1)],1)},staticRenderFns:[]};var w=n("VU/8")(h,_,!1,function(e){n("URJC")},"data-v-3bb5b8ee",null).exports;s.default.use(o.a);var F=new o.a({mode:"hash",routes:[{path:"/",name:"login",component:w},{path:"/register",name:"register",component:f}]});n("UAgs");n("d8/S"),n("uMhA"),n("kXGG");s.default.filter("capitalize",function(e){return e?e.slice(5,16):e}),s.default.config.productionTip=!1,s.default.use(g.a),new s.default({el:"#app",router:F,components:{App:r},template:"<App/>"})},UAgs:function(e,t){var n,s,i,r,o;n=window,s=n.document,(i=s.documentElement).getAttribute("data-use-rem"),r="orientationchange"in n?"orientationchange":"resize",o=function(){var e=i.clientWidth||375;i.style.fontSize=e<=750?100*e/750+"px":"50px"},s.addEventListener&&(n.addEventListener(r,o,!1),s.addEventListener("DOMContentLoaded",o,!1))},URJC:function(e,t){},"d8/S":function(e,t){},kXGG:function(e,t){},uMhA:function(e,t){},uyAF:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1652609dca9f42af76f2.js.map