"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[417],{7417:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("signup-form")},a=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signup-page"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[s("h1",[e._v("회원가입")]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userEmail,expression:"userEmail"}],staticClass:"form-control",attrs:{type:"email",id:"floatingPassword",placeholder:"이메일"},domProps:{value:e.userEmail},on:{input:function(t){t.target.composing||(e.userEmail=t.target.value)}}}),e._m(0)]),s("p",{staticClass:"validation-text"},[!this.isEmailValid&&this.userEmail?s("span",{staticClass:"warning"},[e._v(" 이메일 양식을 확인해주세요. ")]):e._e()]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userNickname,expression:"userNickname"}],staticClass:"form-control",attrs:{type:"text",id:"floatingPassword",placeholder:"Password"},domProps:{value:e.userNickname},on:{input:function(t){t.target.composing||(e.userNickname=t.target.value)}}}),e._m(1)]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userPw,expression:"userPw"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"비밀번호"},domProps:{value:e.userPw},on:{input:function(t){t.target.composing||(e.userPw=t.target.value)}}}),e._m(2)]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userPwCheck,expression:"userPwCheck"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"비밀번호 재확인"},domProps:{value:e.userPwCheck},on:{input:function(t){t.target.composing||(e.userPwCheck=t.target.value)}}}),e._m(3)]),s("p",{staticClass:"validation-text"},[!this.isPwSame&&e.userPw?s("span",{staticClass:"warning"},[e._v(" 비밀번호가 일치하지 않습니다. ")]):e._e()]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userPhone,expression:"userPhone"}],staticClass:"form-control",attrs:{type:"text",id:"floatingPassword",placeholder:"Password",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},domProps:{value:e.userPhone},on:{input:function(t){t.target.composing||(e.userPhone=t.target.value)}}}),s("label",{attrs:{for:"floatingPassword"}},[e._v("휴대폰번호")])]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userBirth,expression:"userBirth"}],staticClass:"form-control",attrs:{type:"text",id:"floatingPassword",placeholder:"Password",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},domProps:{value:e.userBirth},on:{input:function(t){t.target.composing||(e.userBirth=t.target.value)}}}),s("label",{attrs:{for:"floatingPassword"}},[e._v("생년월일")])]),s("br"),s("button",{staticClass:"btnInActive",class:{btnPrimary:e.isValid},attrs:{disabled:!e.isValid,type:"button"},on:{click:e.submitForm}},[e._v(" 회원가입 ")])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{attrs:{for:"floatingPassword"}},[e._v("이메일 "),s("em",[e._v("(필수)")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{attrs:{for:"floatingPassword"}},[e._v("닉네임 "),s("em",[e._v("(필수)")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{attrs:{for:"floatingPassword"}},[e._v("비밀번호 최소 6글자 "),s("em",[e._v("(필수)")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{attrs:{for:"floatingPassword"}},[e._v("비밀번호 재확인 "),s("em",[e._v("(필수)")])])}],o=s(7386);const u=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);var l={data(){return{userPw:"",userPwCheck:"",userNickname:"",userEmail:"",userPhone:"",userBirth:"",userRanking:"baby"}},computed:{isEmailValid(){return u(this.userEmail)},isValid(){return!!(this.userEmail&&this.userPw&&this.userPwCheck&&this.userNickname)},isPwSame(){return!(this.userPw!=this.userPwCheck||!this.userPw)}},methods:{async submitForm(){try{console.log("폼 제출");const e={password:this.userPw,nickName:this.userNickname,email:this.userEmail,phone:this.userPhone,birth:this.userBirth},{data:t}=await(0,o.a$)(e);console.log(t),this.$router.push("/"),alert("회원가입이 완료되었습니다.")}catch(e){alert(e.response.data.msg),this.$router.push("/signup")}finally{this.initForm()}},initForm(){this.userPw="",this.userPwCheck="",this.userNickname="",this.userEmail="",this.userPhone="",this.userBirth=""}}},c=l,m=s(1001),d=(0,m.Z)(c,i,n,!1,null,"7636c76a",null),p=d.exports,f={components:{SignupForm:p}},h=f,v=(0,m.Z)(h,r,a,!1,null,"60f2df73",null),g=v.exports},7386:function(e,t,s){s.d(t,{BT:function(){return n},Nq:function(){return o},a$:function(){return a},pH:function(){return i}});var r=s(866);function a(e){return r.eE.post("auth/register",e)}function i(e){return r.eE.post("auth/login",e)}function n(e){return r.eE.get(`/user/users/${e}`)}function o(e,t){return r.eE.put(`/user/users/${e}`,t)}}}]);
//# sourceMappingURL=417.5057cbac.js.map