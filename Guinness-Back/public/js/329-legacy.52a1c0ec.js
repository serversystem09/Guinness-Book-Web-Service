"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[329],{5329:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("post-edit-form")},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("div",{staticClass:"input__wrapper"},[n("label",{attrs:{for:"title"}},[t._v("제목")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.postTitle,expression:"postData.postTitle"}],attrs:{id:"title"},domProps:{value:t.postData.postTitle},on:{input:function(e){e.target.composing||t.$set(t.postData,"postTitle",e.target.value)}}})]),n("div",{staticClass:"input__wrapper"},[n("label",[t._v("분류")]),n("div",{staticClass:"select__wrapper"},[n("div",{attrs:{id:"select-1"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected1,expression:"selected1"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected1=e.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:""}},[t._v("대분류")]),n("option",{attrs:{value:"1"}},[t._v("체육")]),n("option",{attrs:{value:"2"}},[t._v("음식")]),n("option",{attrs:{value:"3"}},[t._v("춤")]),n("option",{attrs:{value:"4"}},[t._v("노래")]),n("option",{attrs:{value:"5"}},[t._v("공예")]),n("option",{attrs:{value:"6"}},[t._v("사회 캠페인")]),n("option",{attrs:{value:"7"}},[t._v("오락")])])])])]),n("div",{staticClass:"input__wrapper"},[n("label",[t._v("소분류")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.eventName,expression:"postData.eventName"}],attrs:{placeholder:"소분류",id:"input-etc"},domProps:{value:t.postData.eventName},on:{input:function(e){e.target.composing||t.$set(t.postData,"eventName",e.target.value)}}})]),n("div",{staticClass:"input__wrapper"},[n("label",{attrs:{for:"content"}},[t._v("소개")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postData.content,expression:"postData.content"}],attrs:{rows:"5",id:"content"},domProps:{value:t.postData.content},on:{input:function(e){e.target.composing||t.$set(t.postData,"content",e.target.value)}}})]),n("div",{staticClass:"input__wrapper"},[n("label",{attrs:{for:"file"}},[t._v("첨부파일")]),n("input",{attrs:{id:"file",type:"file"},on:{change:t.onImageChange}}),t._l(t.uploadimageurl,(function(t,e){return n("v-img",{key:e,staticStyle:{border:"2px solid black","margin-left":"100px"},attrs:{src:t.url,contain:"",height:"150px",width:"200px"}})}))],2),n("button",{staticClass:"btnInActive",class:{btnPrimary:t.isValid},attrs:{disabled:!t.isValid,type:"submit"},on:{click:t.submitForm}},[t._v(" 수정 ")])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("게시글 작성")])])}],i=n(6198),u=(n(8975),n(9344)),c={created:function(){this.fetchPostData()},data:function(){return{selected1:"대분류",postData:[],uploadimageurl:[],imagecnt:0}},computed:{isValid:function(){return!!(this.postData.postTitle&&this.postData.content&&this.selected1&&this.postData.eventName)}},methods:{submitForm:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.dq)(t.$route.params.id,{postTitle:t.postData.postTitle,content:t.postData.content,eventName:t.postData.eventName,writerID:t.$store.state.userID});case 3:n=e.sent,a=n.data,console.log(a),t.$router.push("/category"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},fetchPostData:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.SD)(t.$route.params.id);case 3:n=e.sent,a=n.data,console.log(a),t.postData=a,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},initForm:function(){this.title="",this.selected1="",this.selected2="",this.content="",this.userBirth=""}}},l=c,p=n(3736),v=(0,p.Z)(l,o,s,!1,null,null,null),d=v.exports,m={components:{PostEditForm:d}},f=m,h=(0,p.Z)(f,a,r,!1,null,null,null),_=h.exports},9344:function(t,e,n){n.d(e,{Bn:function(){return c},SD:function(){return r},Ti:function(){return u},dq:function(){return i},fR:function(){return s},mK:function(){return p},n9:function(){return l},qb:function(){return o}});var a=n(866);function r(t){return a.eE.get("post/posts/".concat(t))}function o(t){return a.eE.post("post/posts",t)}function s(t){return a.eE["delete"]("post/posts/".concat(t))}function i(t,e){return a.eE.put("post/posts/".concat(t),e)}function u(){return a.eE.post("/post/uploadphoto")}function c(t){return a.eE.get("/post/postsByCat/".concat(t))}function l(t){return a.eE.put("/post/like/".concat(t))}function p(t){return a.eE.put("/post/report/".concat(t))}}}]);
//# sourceMappingURL=329-legacy.52a1c0ec.js.map