"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[777],{2777:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category-board"},[s("div",{staticClass:"categoryNav"},[s("aside",[s("ul",t._l(t.category,(function(e,n){return s("li",{key:n,staticClass:"category",on:{click:function(s){return t.fetchPostByCat(e.categoryNum)}}},[t._v(" "+t._s(e.categoryName)+"  "),s("i",{staticClass:"fas fa-angle-right"})])})),0)])]),s("div",{staticClass:"post-list__wrapper"},[s("h3",[t._v(" "+t._s(this.data.data.categoryName)+" "),s("i",{staticClass:"fas fa-angle-right"})]),s("div",{staticClass:"post-card__wrapper"},t._l(t.postItems,(function(e,n){return s("PostList",{key:n,attrs:{postItem:e},on:{fetchPostByCat:t.fetchPostByCat}})})),1)])])},r=[],a=s(6198),o=(s(8975),s(9344)),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"post-card"},[s("div",{staticClass:"post-card__img"},[t._v("이미지 자리")]),s("div",{staticClass:"post-card__contents"},[s("h3",{staticClass:"text__title cursor",on:{click:t.toDetail}},[t._v(" ["+t._s(t.postItem.eventName)+"] "+t._s(t.postItem.postTitle)+" ")]),s("h5",{staticClass:"text__title"},[t._v("  "),s("i",{staticClass:"fa-heart fas"}),t._v(" "+t._s(t.postItem.likeNum)+" ")]),s("div",{staticClass:"text__contents"},[t._v(" "+t._s(t.postItem.content)+" ")])])])])},i=[],u={props:{postItem:{type:Object,required:!0}},methods:{toDetail:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{s=t.postItem.postNum,console.log("해당 게시글 아이디",s),t.$router.push("postview/".concat(s))}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})))()}}},l=u,p=s(3736),f=(0,p.Z)(l,c,i,!1,null,"1075c37a",null),g=f.exports,h=s(866);function m(){return h.eE.get("cat/categories")}function v(t){return h.eE.get("cat/categories/".concat(t))}var _={components:{PostList:g},data:function(){return{postItems:[],data:[],cateNum:1,cnt:0,category:[]}},created:function(){this.fetchCategory(),this.fetchPostByCat(this.cateNum)},methods:{fetchCategory:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:s=e.sent,n=s.data,t.category=n,console.log("카테고리",t.category),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},fetchPostByCat:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function s(){var n,r,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,(0,o.Bn)(t);case 3:return n=s.sent,r=n.data,e.postItems=r,console.log("게시글",e.postItems),a=e.postItems,s.next=10,v(t);case 10:e.data=s.sent,e.$emit("fetchPostByCat",a),s.next=17;break;case 14:s.prev=14,s.t0=s["catch"](0),console.log(s.t0);case 17:case"end":return s.stop()}}),s,null,[[0,14]])})))()}}},d=_,C=(0,p.Z)(d,n,r,!1,null,null,null),y=C.exports},9344:function(t,e,s){s.d(e,{Bn:function(){return i},SD:function(){return r},dq:function(){return c},fR:function(){return o},qb:function(){return a}});var n=s(866);function r(t){return n.eE.get("post/posts/".concat(t))}function a(t){return n.eE.post("post/posts",t)}function o(t){return n.eE["delete"]("post/posts/".concat(t))}function c(t,e){return n.eE.put("post/posts/".concat(t),e)}function i(t){return n.eE.get("/post/postsByCat/".concat(t))}}}]);
//# sourceMappingURL=777-legacy.3f70ec34.js.map