"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[859],{859:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("GuinnessRankList")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hot-category"},[e._m(0),n("div",{staticClass:"wrapper"},[n("table",{staticClass:"ranktable"},e._l(e.rankData,(function(t,r){return n("tr",{key:t.index},[n("th",[e._v(e._s(r+1)+"위")]),n("td",[e._v(e._s(t.postTitle))]),n("td",[e._v(e._s(t.nickName)+" 님")]),n("td",[e._v(e._s(t.eventName))]),n("td",[e._v(e._s(t.likes))])])})),0)])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("인기 이벤트 순위")])])}],i=n(6198),c=(n(8975),n(9725)),o={created:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchRank();case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{rankData:[]}},methods:{fetchRank:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,c.r8)();case 2:n=t.sent,r=n.data,e.rankData=r,console.log(r);case 6:case"end":return t.stop()}}),t)})))()}}},l=o,f=n(3736),_=(0,f.Z)(l,s,u,!1,null,"50c65aa7",null),v=_.exports,h={components:{GuinnessRankList:v}},d=h,k=(0,f.Z)(d,r,a,!1,null,"27b97598",null),p=k.exports},9725:function(e,t,n){n.d(t,{K9:function(){return s},r8:function(){return a}});var r=n(866);function a(){return r.eE.get("rank/")}function s(){return r.eE.get("/2")}}}]);
//# sourceMappingURL=859-legacy.40fc1aef.js.map