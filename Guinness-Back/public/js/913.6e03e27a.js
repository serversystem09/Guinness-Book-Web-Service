"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[913],{7913:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("문의 내역")]),e("div",{staticClass:"wrapper"},[e("table",{staticClass:"ranktable"},t._l(t.inquiryLists,(function(n,s){return e("tr",{key:n.index},[e("th",[t._v(t._s(s))]),e("td",[t._v(t._s(n.csTitle))]),e("td",[t._v(t._s(n.content))])])})),0)])])},r=[],i=e(554),u={data(){return{inquiryLists:[]}},created(){this.fetchInquiry()},methods:{async fetchInquiry(){try{const{data:t}=await(0,i.p)(this.$store.state.userID);this.inquiryLists=t,console.log(t)}catch(t){console.log(t)}}}},c=u,a=e(3736),o=(0,a.Z)(c,s,r,!1,null,null,null),l=o.exports},554:function(t,n,e){e.d(n,{k:function(){return r},p:function(){return i}});var s=e(866);function r(t){return s.eE.post("cs/create",t)}function i(t){return s.eE.get("cs/CSs",t)}}}]);
//# sourceMappingURL=913.6e03e27a.js.map