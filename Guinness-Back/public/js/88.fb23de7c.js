"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[88],{5088:function(t,n,s){s.r(n),s.d(n,{default:function(){return l}});var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"inquiry"},[s("h1",[t._v("나의 문의 내역")]),s("div",{staticClass:"wrapper"},[s("table",{staticClass:"ranktable"},[t._m(0),t._l(t.inquiryLists,(function(n,e){return s("tr",{key:e},[s("td",[t._v(t._s(e+1))]),s("td",[t._v(t._s(n.csTitle))]),s("td",[t._v(t._s(n.content))]),s("td",[t._v(t._s(n.writeDate))])])}))],2)])])},r=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("tr",[s("th",[t._v("번호")]),s("th",[t._v("제목")]),s("th",[t._v("내용")]),s("th",[t._v("작성일")])])}],i=s(554),u={data(){return{inquiryLists:[]}},created(){this.fetchInquiry()},methods:{async fetchInquiry(){try{const{data:t}=await(0,i.p)(this.$store.state.userID);this.inquiryLists=t,console.log(this.inquiryLists)}catch(t){console.log(t)}}}},c=u,a=s(3736),o=(0,a.Z)(c,e,r,!1,null,"6a68f3a1",null),l=o.exports},554:function(t,n,s){s.d(n,{k:function(){return r},p:function(){return i}});var e=s(866);function r(t){return e.eE.post("cs/create",t)}function i(t){return e.eE.get(`cs/myCSs/${t}`)}}}]);
//# sourceMappingURL=88.fb23de7c.js.map