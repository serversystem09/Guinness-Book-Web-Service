"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[914],{7914:function(t,s,e){e.r(s),e.d(s,{default:function(){return E}});var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mainpage"},[e("HotPostList"),e("HotCategoryList")],1)},a=[],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hot-contents"},[t._m(0),e("div",{staticClass:"card__wrapper"},t._l(t.hotPosts,(function(s,n){return e("div",{key:n,staticClass:"card"},[e("div",{staticClass:"card__img"},[t._v("이미지 자리")]),e("div",{staticClass:"card__content"},[e("div",[e("h4",[t._v(t._s(n+1)+"위")])]),e("div",{staticClass:"card__title"},[t._v(t._s(s.postTitle))]),e("div",{staticClass:"card__personal"},[e("div",{staticClass:"card__nickname"},[t._v(t._s(s.nickName))]),e("div",{staticClass:"card__scrap"},[e("i",{staticClass:"icon ion-md-heart"}),t._v(" "+t._s(s.likes)+" ")])])])])})),0)])},c=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",[e("h1",[t._v("HOT 게시글")])])}],i=e(9725),o={data(){return{hotPosts:[],contents:[{id:0,nickname:"도연",scrap_cnt:"29"},{id:1,nickname:"민영",scrap_cnt:"80"},{id:2,nickname:"수진",scrap_cnt:"124"}]}},created(){this.fetchHotPostRank()},methods:{async fetchHotPostRank(){const{data:t}=await(0,i.HA)();this.hotPosts=t,console.log(t)}}},l=o,_=e(3736),u=(0,_.Z)(l,r,c,!1,null,null,null),d=u.exports,h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hot-category"},[t._m(0),e("div",{staticClass:"wrapper"},[e("table",{staticClass:"ranktable"},[t._m(1),t._l(t.hotLists,(function(s,n){return e("tr",{key:n},[e("th",[t._v(t._s(n+1)+"위")]),e("td",[t._v(t._s(s.categoryName))]),e("td",[t._v(t._s(s.userAmount)+" 명")])])}))],2)])])},v=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",[e("h1",[t._v("인기 종목 순위")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("th",[t._v("순위")]),e("th",[t._v("종목")]),e("th",[t._v("참가자 수")])])}],f={created(){this.fetchHotCateRank()},data(){return{hotLists:[]}},methods:{async fetchHotCateRank(){const{data:t}=await(0,i.K9)();this.hotLists=t,console.log(t)}}},m=f,C=(0,_.Z)(m,h,v,!1,null,"90b807ba",null),k=C.exports,p={components:{HotCategoryList:k,HotPostList:d}},g=p,H=(0,_.Z)(g,n,a,!1,null,null,null),E=H.exports},9725:function(t,s,e){e.d(s,{HA:function(){return r},K9:function(){return c},r8:function(){return a}});var n=e(866);function a(){return n.eE.get("rank/")}function r(){return n.eE.get("/1")}function c(){return n.eE.get("/2")}}}]);
//# sourceMappingURL=914.ba6adbe2.js.map