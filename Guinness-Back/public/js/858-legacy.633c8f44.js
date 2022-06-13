"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[858],{6858:function(t,e,s){s.r(e),s.d(e,{default:function(){return w}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("signup-form")},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signup-page"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("h1",[t._v("회원가입")]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],staticClass:"form-control",attrs:{type:"email",id:"floatingPassword",placeholder:"이메일"},domProps:{value:t.userEmail},on:{input:function(e){e.target.composing||(t.userEmail=e.target.value)}}}),s("label",{attrs:{for:"floatingPassword"}},[t._v("이메일")]),s("button",{staticClass:"btnInActive",class:{btnPrimary:t.isEmailValid},attrs:{type:"button"}},[t._v(" 중복확인 ")])]),s("p",{staticClass:"validation-text"},[!this.isEmailValid&&this.userEmail?s("span",{staticClass:"warning"},[t._v(" 이메일 양식을 확인해주세요. ")]):t._e()]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userNickname,expression:"userNickname"}],staticClass:"form-control",attrs:{type:"text",id:"floatingPassword",placeholder:"Password"},domProps:{value:t.userNickname},on:{input:function(e){e.target.composing||(t.userNickname=e.target.value)}}}),s("label",{attrs:{for:"floatingPassword"}},[t._v("닉네임")])]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPw,expression:"userPw"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"비밀번호"},domProps:{value:t.userPw},on:{input:function(e){e.target.composing||(t.userPw=e.target.value)}}}),s("label",{attrs:{for:"floatingPassword"}},[t._v("비밀번호")])]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwCheck,expression:"userPwCheck"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"비밀번호 재확인"},domProps:{value:t.userPwCheck},on:{input:function(e){e.target.composing||(t.userPwCheck=e.target.value)}}}),s("label",{attrs:{for:"floatingPassword"}},[t._v("비밀번호 재확인")])]),s("p",{staticClass:"validation-text"},[!this.isPwSame&&t.userPw?s("span",{staticClass:"warning"},[t._v(" 비밀번호가 일치하지 않습니다. ")]):t._e()]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userPhone,expression:"userPhone"}],staticClass:"form-control",attrs:{type:"text",id:"floatingPassword",placeholder:"Password",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},domProps:{value:t.userPhone},on:{input:function(e){e.target.composing||(t.userPhone=e.target.value)}}}),s("label",{attrs:{for:"floatingPassword"}},[t._v("휴대폰번호")])]),s("div",{staticClass:"form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userBirth,expression:"userBirth"}],staticClass:"form-control",attrs:{type:"text",id:"floatingPassword",placeholder:"Password",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1')"},domProps:{value:t.userBirth},on:{input:function(e){e.target.composing||(t.userBirth=e.target.value)}}}),s("label",{attrs:{for:"floatingPassword"}},[t._v("생년월일")])]),s("br"),s("button",{staticClass:"btnInActive",class:{btnPrimary:t.isValid},attrs:{disabled:!t.isValid,type:"button"},on:{click:t.submitForm}},[t._v(" 회원가입 ")])])])},i=[],o=s(6198),u=(s(8975),s(7386)),l=(s(4916),s(4723),function(t){return String(t).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}),c={data:function(){return{userPw:"",userPwCheck:"",userNickname:"",userEmail:"",userPhone:"",userBirth:"",userRanking:"baby"}},computed:{isEmailValid:function(){return l(this.userEmail)},isValid:function(){return!!(this.userEmail&&this.userPw&&this.userPwCheck)},isPwSame:function(){return!(this.userPw!=this.userPwCheck||!this.userPw)}},methods:{submitForm:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var s,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("폼 제출"),s={password:t.userPw,nickname:t.userNickname,email:t.userEmail},e.next=5,(0,u.a$)(s);case 5:r=e.sent,a=r.data,console.log(a),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0.message);case 13:return e.prev=13,t.initForm(),t.$router.push("/"),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[0,10,13,17]])})))()},initForm:function(){this.userId="",this.userPw="",this.userNickname="",this.userEmail=""}}},m=c,p=s(3736),d=(0,p.Z)(m,n,i,!1,null,"6829cfb2",null),f=d.exports,v={components:{SignupForm:f}},g=v,h=(0,p.Z)(g,r,a,!1,null,"60f2df73",null),w=h.exports},7386:function(t,e,s){s.d(e,{BT:function(){return i},Nq:function(){return o},a$:function(){return a},pH:function(){return n}});var r=s(866);function a(t){return r.eE.post("auth/register",t)}function n(t){return r.eE.post("auth/login",t)}function i(t){return r.eE.get("/user/users/".concat(t))}function o(t,e){return r.eE.put("/user/users/".concat(t),e)}}}]);
//# sourceMappingURL=858-legacy.633c8f44.js.map