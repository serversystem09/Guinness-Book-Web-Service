"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[529],{1529:function(t,s,e){e.r(s),e.d(s,{default:function(){return C}});var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"category-board"},[e("div",{staticClass:"categoryNav"},[e("aside",[e("ul",t._l(t.category,(function(s,o){return e("li",{key:o,staticClass:"category",on:{click:function(e){return t.fetchPostByCat(s.categoryNum)}}},[t._v(" "+t._s(s.categoryName)+"  "),e("i",{staticClass:"fas fa-angle-right"})])})),0)])]),e("div",{staticClass:"post-list__wrapper"},[e("h3",[t._v(" "+t._s(this.data.data.categoryName)+" "),e("i",{staticClass:"fas fa-angle-right"})]),e("div",{staticClass:"post-card__wrapper"},t._l(t.postItems,(function(s,o){return e("PostList",{key:o,attrs:{postItem:s},on:{fetchPostByCat:t.fetchPostByCat}})})),1)])])},a=[],n=e(9344),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"post-card"},[e("div",{staticClass:"post-card__contents"},[e("h3",{staticClass:"text__title cursor",on:{click:t.toDetail}},[t._v(" ["+t._s(t.postItem.eventName)+"] "+t._s(t.postItem.postTitle)+" ")]),e("h5",{staticClass:"text__title"},[t._v("  "),e("i",{staticClass:"fa-heart fas"}),t._v(" "+t._s(t.postItem.likeNum)+" ")]),e("div",{staticClass:"text__contents"},[t._v(" "+t._s(t.postItem.content)+" ")])])])])},r=[],i={props:{postItem:{type:Object,required:!0}},methods:{async toDetail(){try{const t=this.postItem.postNum;console.log("해당 게시글 아이디",t),this.$router.push(`postview/${t}`)}catch(t){console.log(t)}}}},u=i,l=e(1001),p=(0,l.Z)(u,c,r,!1,null,"c9cf9dfa",null),f=p.exports,h=e(866);function _(){return h.eE.get("cat/categories")}function g(t){return h.eE.get(`cat/categories/${t}`)}var d={components:{PostList:f},data(){return{postItems:[],data:[],cateNum:1,cnt:0,category:[]}},created(){this.fetchCategory(),this.fetchPostByCat(this.cateNum)},methods:{async fetchCategory(){try{const{data:t}=await _();this.category=t,console.log("카테고리",this.category)}catch(t){console.log(t.message)}},async fetchPostByCat(t){try{const{data:s}=await(0,n.Bn)(t);this.postItems=s,console.log("게시글",this.postItems);const e=this.postItems;this.data=await g(t),this.$emit("fetchPostByCat",e)}catch(s){console.log(s)}}}},y=d,m=(0,l.Z)(y,o,a,!1,null,null,null),C=m.exports},9344:function(t,s,e){e.d(s,{Bn:function(){return i},SD:function(){return a},dq:function(){return r},fR:function(){return c},qb:function(){return n}});var o=e(866);function a(t){return o.eE.get(`post/posts/${t}`)}function n(t){return o.eE.post("post/posts",t)}function c(t){return o.eE["delete"](`post/posts/${t}`)}function r(t,s){return o.eE.put(`post/posts/${t}`,s)}function i(t){return o.eE.get(`/post/postsByCat/${t}`)}}}]);
//# sourceMappingURL=529.a84f6606.js.map