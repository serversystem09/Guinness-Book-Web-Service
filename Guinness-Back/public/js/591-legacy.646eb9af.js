"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[591],{591:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inquiry"},[n("h1",[t._v("나의 문의 내역")]),n("div",{staticClass:"wrapper"},[n("table",{staticClass:"ranktable"},[t._m(0),t._l(t.inquiryLists,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(r+1))]),n("td",[t._v(t._s(e.csTitle))]),n("td",[t._v(t._s(e.content))]),n("td",[t._v(t._s(e.writeDate))])])}))],2)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("번호")]),n("th",[t._v("제목")]),n("th",[t._v("내용")]),n("th",[t._v("작성일")])])}],i=n(6198),u=(n(8975),n(554)),c={data:function(){return{inquiryLists:[]}},created:function(){this.fetchInquiry()},methods:{fetchInquiry:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.p)(t.$store.state.userID);case 3:n=e.sent,r=n.data,t.inquiryLists=r,console.log(t.inquiryLists),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},a=c,o=n(1001),f=(0,o.Z)(a,r,s,!1,null,"6a68f3a1",null),l=f.exports},554:function(t,e,n){n.d(e,{k:function(){return s},p:function(){return i}});var r=n(866);function s(t){return r.eE.post("cs/create",t)}function i(t){return r.eE.get("cs/myCSs/".concat(t))}}}]);
//# sourceMappingURL=591-legacy.646eb9af.js.map