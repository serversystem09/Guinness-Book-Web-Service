"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[938],{1938:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CsForm")},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"csboard"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("h1",[t._v("문의게시판")]),n("div",{staticClass:"typo--col"},[n("label",{staticClass:"left"},[t._v("제목")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",staticStyle:{height:"30pt"},attrs:{size:"40",name:"subject",id:"subject"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",{staticClass:"typo--col",staticStyle:{"margin-bottom":"10px"}},[n("label",{staticClass:"left"},[t._v("글쓰기")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{size:"1000",name:"body",id:"body",rows:"10"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),n("button",{staticClass:"btnInActive",class:{btnPrimary:t.isValid},attrs:{type:"button"},on:{click:t.submitForm}},[t._v(" 글쓰기 ")]),n("br")])])},i=[],a=n(6198),l=(n(8975),n(866)),c={data:function(){return{title:"",content:""}},computed:{isValid:function(){return!(!this.title||!this.content)}},methods:{submitForm:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("문의하기 폼 제출"),n={title:t.title,content:t.content},e.next=5,(0,l.ks)(n);case 5:s=e.sent,o=s.inquiryData,console.log(o),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0.message);case 13:return e.prev=13,t.initForm(),t.$router.push("/"),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[0,10,13,17]])})))()},initForm:function(){this.title="",this.content=""}}},u=c,m=n(3736),p=(0,m.Z)(u,r,i,!1,null,"4cb26908",null),v=p.exports,f={components:{CsForm:v}},d=f,b=(0,m.Z)(d,s,o,!1,null,null,null),h=b.exports}}]);
//# sourceMappingURL=938-legacy.739cade2.js.map