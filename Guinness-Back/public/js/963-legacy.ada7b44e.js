"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[963],{8963:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inquiry"},[n("h1",[t._v("좋아요 한 게시글")]),n("div",{staticClass:"wrapper"},[n("table",{staticClass:"ranktable"},[t._m(0),t._l(t.likedLists,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(r+1))]),n("td",[t._v(t._s(e.eventName))]),n("td",[t._v(t._s(e.postTitle))]),n("td",[t._v(t._s(e.content))]),n("td",[t._v(t._s(e.likeNum))]),n("td",[t._v(t._s(e.reportCount))]),n("td",[t._v(t._s(e.writeDate))]),n("td",[t._v(t._s(e.writerID))])])}))],2)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("번호")]),n("th",[t._v("소분류")]),n("th",[t._v("제목")]),n("th",[t._v("내용")]),n("th",[t._v("좋아요 수")]),n("th",[t._v("신고 수")]),n("th",[t._v("작성일")]),n("th",[t._v("작성자 ID")])])}],i=n(6198),c=(n(8975),n(4900)),u={data:function(){return{likedLists:[]}},created:function(){this.fetchMylike()},methods:{fetchMylike:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.zn)(t.$store.state.userID);case 3:n=e.sent,r=n.data,t.likedLists=r,console.log(t.likedLists),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},a=u,o=n(1001),l=(0,o.Z)(a,r,s,!1,null,"0fa9bd25",null),_=l.exports},4900:function(t,e,n){n.d(e,{hw:function(){return i},j:function(){return c},zn:function(){return s}});n(2222);var r=n(866);function s(t){return r.eE.get("like/likedPosts/".concat(t))}function i(t,e){return r.eE.get("like/liked/".concat(t,"/").concat(e))}function c(t,e){return r.eE.post("like/like/".concat(t,"/").concat(e))}}}]);
//# sourceMappingURL=963-legacy.ada7b44e.js.map