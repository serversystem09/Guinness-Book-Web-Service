"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[996],{1996:function(t,e,s){s.r(e),s.d(e,{default:function(){return E}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category-board"},[s("category-nav",{attrs:{category:t.category,subcategory:t.subcategory},on:{submitCategory:t.submitCategory}}),s("div",{staticClass:"post-list__wrapper"},[s("h3",[t._v(" "+t._s(this.category)+" "),s("i",{staticClass:"fas fa-angle-right"})]),s("div",{staticClass:"post-card__wrapper"},t._l(t.postItems,(function(e,a){return s("PostList",{key:a,attrs:{postItem:e},on:{fetchData:t.fetchData}})})),1)])],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"categoryNav"},[s("aside",[s("ul",t._l(t.category,(function(e,a){return s("li",{key:a,staticClass:"category",on:{click:function(e){return t.showSubcategory(a)}}},[t._v(" "+t._s(t.category[a].title)+"  "),s("i",{staticClass:"fas fa-angle-right"})])})),0)])])},n=[],c=s(6198),i=(s(8975),s(866));function u(){return i.eE.get("cat/categoryies")}var l={created:function(){},data:function(){return{isActive:[!0,!0,!0,!0,!0,!0,!0],category:[{title:"체육",subCategory:["수영","필라테스"]},{title:"음식",subCategory:["수영","필라테스"]},{title:"춤",subCategory:["수영","필라테스"]},{title:"노래",subCategory:["수영","필라테스"]},{title:"공예",subCategory:["수영","필라테스"]},{title:"사회 캠페인",subCategory:["수영","필라테스"]},{title:"오락",subCategory:["수영","필라테스"]}]}},methods:{showSubcategory:function(t){var e=t;console.log(e),this.isActive[e]=!this.isActive[e],console.log(this.isActive[e]);var s=this.category[e].title,a=this.category[e].subCategory;this.$emit("submitCategory",s,a)},fetchCategory:function(){var t=this;return(0,c.Z)(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:s=e.sent,a=s.data,t.category=a,console.log(t.category),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},g=l,h=s(3736),f=(0,h.Z)(g,o,n,!1,null,null,null),p=f.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"post-card"},[s("div",{staticClass:"post-card__img"},[t._v("이미지 자리")]),s("div",{staticClass:"post-card__contents"},[s("h3",{staticClass:"text__title",on:{click:t.toDetail}},[t._v("  "+t._s(t.postItem.postTitle)+" ")]),s("h5",{staticClass:"text__title"},[t._v("  "),s("i",{staticClass:"fa-heart fas"}),t._v(" "+t._s(t.postItem.likeNum)+" ")]),s("div",{staticClass:"text__contents"},[t._v(" "+t._s(t.postItem.content)+" ")])])])])},_=[],v={props:{postItem:{type:Object,required:!0}},methods:{toDetail:function(){var t=this;return(0,c.Z)(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{s=t.postItem.postNum,console.log("해당 게시글 아이디",s),t.$router.push("postview/".concat(s))}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})))()}}},d=v,m=(0,h.Z)(d,y,_,!1,null,"2949cbda",null),C=m.exports,b=s(6166),w=s.n(b),k={components:{CategoryNav:p,PostList:C},data:function(){return{category:"체육",subcategory:"수영",postItems:[]}},created:function(){this.fetchData()},methods:{submitCategory:function(t,e){this.category=t,this.subcategory=e},fetchData:function(){var t=this;w().get("".concat({NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL,"post/posts")).then((function(e){console.log("res결과",e.data),t.postItems=e.data})).catch((function(t){return console.error(t)}))}}},x=k,I=(0,h.Z)(x,a,r,!1,null,null,null),E=I.exports}}]);
//# sourceMappingURL=996-legacy.37f6baed.js.map