"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[938],{1938:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CsForm")},o=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"csboard"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("h1",[t._v("문의게시판")]),s("div",{staticClass:"typo--col"},[s("label",{staticClass:"left"},[t._v("제목")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",staticStyle:{height:"30pt"},attrs:{size:"40",name:"subject",id:"subject"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"typo--col",staticStyle:{"margin-bottom":"10px"}},[s("label",{staticClass:"left"},[t._v("글쓰기")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{size:"1000",name:"body",id:"body",rows:"10"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),s("button",{staticClass:"btnInActive",class:{btnPrimary:t.isValid},attrs:{type:"button"},on:{click:t.submitForm}},[t._v(" 글쓰기 ")]),s("br")])])},l=[],a=s(866),r={data(){return{title:"",content:""}},computed:{isValid(){return!(!this.title||!this.content)}},methods:{async submitForm(){try{console.log("문의하기 폼 제출");const t={title:this.title,content:this.content},{inquiryData:e}=await(0,a.ks)(t);console.log(e)}catch(t){console.log(t.message)}finally{this.initForm(),this.$router.push("/")}},initForm(){this.title="",this.content=""}}},c=r,u=s(3736),m=(0,u.Z)(c,i,l,!1,null,"4cb26908",null),p=m.exports,d={components:{CsForm:p}},v=d,f=(0,u.Z)(v,n,o,!1,null,null,null),b=f.exports}}]);
//# sourceMappingURL=938.fd0511e6.js.map