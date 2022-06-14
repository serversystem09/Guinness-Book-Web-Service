"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[87],{7087:function(t,s,e){e.r(s),e.d(s,{default:function(){return g}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("signup-form")},r=[],i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"signup-page"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("h1",[t._v("회원가입")]),e("div",{staticClass:"form-floating"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],staticClass:"form-control",attrs:{type:"email",id:"floatingPassword",placeholder:"이메일"},domProps:{value:t.userEmail},on:{input:function(s){s.target.composing||(t.userEmail=s.target.value)}}}),e("label",{attrs:{for:"floatingPassword"}},[t._v("이메일")]),e("button",{staticClass:"btnInActive",class:{btnPrimary:t.isEmailValid},attrs:{type:"button"}},[t._v(" 중복확인 ")])]),e("p",{staticClass:"validation-text"},[!this.isEmailValid&&this.userEmail?e("span",{staticClass:"warning"},[t._v(" 이메일 양식을 확인해주세요. ")]):t._e()]),e("div",{staticClass:"form-floating"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userNickname,expression:"userNickname"}],staticClass:"form-control",attrs:{type:"text",id:"floatingPassword",placeholder:"Password"},domProps:{value:t.userNickname},on:{input:function(s){s.target.composing||(t.userNickname=s.target.value)}}}),e("label",{attrs:{for:"floatingPassword"}},[t._v("닉네임")])]),e("div",{staticClass:"form-floating"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userPw,expression:"userPw"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"비밀번호"},domProps:{value:t.userPw},on:{input:function(s){s.target.composing||(t.userPw=s.target.value)}}}),e("label",{attrs:{for:"floatingPassword"}},[t._v("비밀번호")])]),e("div",{staticClass:"form-floating"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwCheck,expression:"userPwCheck"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"비밀번호 재확인"},domProps:{value:t.userPwCheck},on:{input:function(s){s.target.composing||(t.userPwCheck=s.target.value)}}}),e("label",{attrs:{for:"floatingPassword"}},[t._v("비밀번호 재확인")])]),e("p",{staticClass:"validation-text"},[!this.isPwSame&&t.userPw?e("span",{staticClass:"warning"},[t._v(" 비밀번호가 일치하지 않습니다. ")]):t._e()]),e("div",{staticClass:"form-floating"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userPhone,expression:"userPhone"}],staticClass:"form-control",attrs:{type:"text",id:"floatingPassword",placeholder:"Password",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},domProps:{value:t.userPhone},on:{input:function(s){s.target.composing||(t.userPhone=s.target.value)}}}),e("label",{attrs:{for:"floatingPassword"}},[t._v("휴대폰번호")])]),e("div",{staticClass:"form-floating"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userBirth,expression:"userBirth"}],staticClass:"form-control",attrs:{type:"text",id:"floatingPassword",placeholder:"Password",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},domProps:{value:t.userBirth},on:{input:function(s){s.target.composing||(t.userBirth=s.target.value)}}}),e("label",{attrs:{for:"floatingPassword"}},[t._v("생년월일")])]),e("br"),e("button",{staticClass:"btnInActive",class:{btnPrimary:t.isValid},attrs:{disabled:!t.isValid,type:"button"},on:{click:t.submitForm}},[t._v(" 회원가입 ")])])])},o=[],n=e(7386);const l=t=>String(t).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);var u={data(){return{userPw:"",userPwCheck:"",userNickname:"",userEmail:"",userPhone:"",userBirth:"",userRanking:"baby"}},computed:{isEmailValid(){return l(this.userEmail)},isValid(){return!!(this.userEmail&&this.userPw&&this.userPwCheck)},isPwSame(){return!(this.userPw!=this.userPwCheck||!this.userPw)}},methods:{async submitForm(){try{console.log("폼 제출");const t={password:this.userPw,nickname:this.userNickname,email:this.userEmail,phone:this.userPhone,birth:this.userBirth},{data:s}=await(0,n.a$)(t);console.log(s)}catch(t){console.log(t.message)}finally{this.initForm(),this.$router.push("/")}},initForm(){this.userId="",this.userPw="",this.userNickname="",this.userEmail=""}}},c=u,m=e(3736),d=(0,m.Z)(c,i,o,!1,null,"6a4b4506",null),p=d.exports,f={components:{SignupForm:p}},h=f,v=(0,m.Z)(h,a,r,!1,null,"60f2df73",null),g=v.exports},7386:function(t,s,e){e.d(s,{BT:function(){return o},Nq:function(){return n},a$:function(){return r},pH:function(){return i}});var a=e(866);function r(t){return a.eE.post("auth/register",t)}function i(t){return a.eE.post("auth/login",t)}function o(t){return a.eE.get(`/user/users/${t}`)}function n(t,s){return a.eE.put(`/user/users/${t}`,s)}}}]);
//# sourceMappingURL=87.15d1babc.js.map