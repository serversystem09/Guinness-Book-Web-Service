"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[996],{1996:function(t,s,e){e.r(s),e.d(s,{default:function(){return E}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"category-board"},[e("category-nav",{attrs:{category:t.category,subcategory:t.subcategory},on:{submitCategory:t.submitCategory}}),e("div",{staticClass:"post-list__wrapper"},[e("h3",[t._v(" "+t._s(this.category)+" "),e("i",{staticClass:"fas fa-angle-right"})]),e("div",{staticClass:"post-card__wrapper"},t._l(t.postItems,(function(s,a){return e("PostList",{key:a,attrs:{postItem:s},on:{fetchData:t.fetchData}})})),1)])],1)},o=[],c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"categoryNav"},[e("aside",[e("ul",t._l(t.category,(function(s,a){return e("li",{key:a,staticClass:"category",on:{click:function(s){return t.showSubcategory(a)}}},[t._v(" "+t._s(t.category[a].title)+"  "),e("i",{staticClass:"fas fa-angle-right"})])})),0)])])},i=[],r=e(866);function n(){return r.eE.get("cat/categoryies")}var l={created(){},data:function(){return{isActive:[!0,!0,!0,!0,!0,!0,!0],category:[{title:"체육",subCategory:["수영","필라테스"]},{title:"음식",subCategory:["수영","필라테스"]},{title:"춤",subCategory:["수영","필라테스"]},{title:"노래",subCategory:["수영","필라테스"]},{title:"공예",subCategory:["수영","필라테스"]},{title:"사회 캠페인",subCategory:["수영","필라테스"]},{title:"오락",subCategory:["수영","필라테스"]}]}},methods:{showSubcategory(t){const s=t;console.log(s),this.isActive[s]=!this.isActive[s],console.log(this.isActive[s]);const e=this.category[s].title,a=this.category[s].subCategory;this.$emit("submitCategory",e,a)},async fetchCategory(){try{const{data:t}=await n();this.category=t,console.log(this.category)}catch(t){console.log(t.message)}}}},u=l,g=e(3736),y=(0,g.Z)(u,c,i,!1,null,null,null),h=y.exports,_=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"post-card"},[e("div",{staticClass:"post-card__img"},[t._v("이미지 자리")]),e("div",{staticClass:"post-card__contents"},[e("h3",{staticClass:"text__title",on:{click:t.toDetail}},[t._v("  "+t._s(t.postItem.postTitle)+" ")]),e("h5",{staticClass:"text__title"},[t._v("  "),e("i",{staticClass:"fa-heart fas"}),t._v(" "+t._s(t.postItem.likeNum)+" ")]),e("div",{staticClass:"text__contents"},[t._v(" "+t._s(t.postItem.content)+" ")])])])])},p=[],d={props:{postItem:{type:Object,required:!0}},methods:{async toDetail(){try{const t=this.postItem.postNum;console.log("해당 게시글 아이디",t),this.$router.push(`postview/${t}`)}catch(t){console.log(t)}}}},C=d,f=(0,g.Z)(C,_,p,!1,null,"2949cbda",null),v=f.exports,m=e(6166),b=e.n(m),I={components:{CategoryNav:h,PostList:v},data(){return{category:"체육",subcategory:"수영",postItems:[]}},created(){this.fetchData()},methods:{submitCategory(t,s){this.category=t,this.subcategory=s},fetchData(){b().get(`${{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL}post/posts`).then((t=>{console.log("res결과",t.data),this.postItems=t.data})).catch((t=>console.error(t)))}}},k=I,w=(0,g.Z)(k,a,o,!1,null,null,null),E=w.exports}}]);
//# sourceMappingURL=996.801c2d09.js.map