"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[649],{6649:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CsForm")},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"csboard"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("h1",[t._v("문의게시판")]),n("div",{staticClass:"typo--col"},[n("label",{staticClass:"left"},[t._v("제목")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",staticStyle:{height:"30pt"},attrs:{size:"40",name:"subject",id:"subject"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",{staticClass:"typo--col",staticStyle:{"margin-bottom":"10px"}},[n("label",{staticClass:"left"},[t._v("글쓰기")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{size:"1000",name:"body",id:"body",rows:"10"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),n("button",{staticClass:"btnInActive",class:{btnPrimary:t.isValid},attrs:{type:"button"},on:{click:t.submitForm}},[t._v(" 글쓰기 ")]),n("br")])])},i=[],a=n(6198),c=(n(8975),n(554)),l={data:function(){return{title:"",content:""}},computed:{isValid:function(){return!(!this.title||!this.content)}},methods:{submitForm:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("문의하기 폼 제출"),e.next=4,(0,c.k)({csTitle:t.title,content:t.content,writerID:t.$store.state.userID});case 4:n=e.sent,s=n.data,console.log(s),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0.message);case 12:return e.prev=12,t.initForm(),t.$router.push("/"),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[0,9,12,16]])})))()},initForm:function(){this.title="",this.content=""}}},u=l,m=n(3736),f=(0,m.Z)(u,o,i,!1,null,"b089248e",null),p=f.exports,v={components:{CsForm:p}},d=v,b=(0,m.Z)(d,s,r,!1,null,null,null),h=b.exports},554:function(t,e,n){n.d(e,{k:function(){return r},p:function(){return o}});var s=n(866);function r(t){return s.eE.post("cs/create",t)}function o(t){return s.eE.get("cs/CSs",t)}}}]);
//# sourceMappingURL=649-legacy.49c3b23c.js.map