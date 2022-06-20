"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[152],{9152:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PostAddForm")],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("form",{staticClass:"form",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("div",{staticClass:"input__wrapper"},[n("label",{attrs:{for:"title"}},[t._v("제목")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",{staticClass:"input__wrapper"},[n("label",[t._v("분류")]),n("div",{staticClass:"select__wrapper"},[n("div",{attrs:{id:"select-1"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.category=e.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:""}},[t._v("대분류")]),n("option",{attrs:{selected:""}},[t._v("대분류")]),n("option",{attrs:{value:"1"}},[t._v("운동")]),n("option",{attrs:{value:"2"}},[t._v("음식")]),n("option",{attrs:{value:"3"}},[t._v("춤")]),n("option",{attrs:{value:"4"}},[t._v("노래")]),n("option",{attrs:{value:"5"}},[t._v("만들기")]),n("option",{attrs:{value:"6"}},[t._v("캠페인")]),n("option",{attrs:{value:"7"}},[t._v("게임")]),n("option",{attrs:{value:"8"}},[t._v("기타")])])])])]),n("div",{staticClass:"input__wrapper"},[n("label",[t._v("소분류")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.eventName,expression:"eventName"}],attrs:{placeholder:"소분류",id:"input-etc"},domProps:{value:t.eventName},on:{input:function(e){e.target.composing||(t.eventName=e.target.value)}}})]),n("div",{staticClass:"input__wrapper"},[n("label",{attrs:{for:"content"}},[t._v("소개")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{rows:"5",id:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),n("div",{staticClass:"input__wrapper"},[n("label",{attrs:{for:"file"}},[t._v("첨부파일")]),n("input",{ref:"file",attrs:{id:"file",type:"file"},on:{change:t.selectFile}})]),n("button",{staticClass:"btnInActive",class:{btnPrimary:t.isValid},attrs:{disabled:!t.isValid,type:"submit"}},[t._v(" 작성 ")])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("게시글 작성")])])}],s=n(6198),l=(n(8975),n(9344)),u=n(6166),c=n.n(u),p={components:{},data:function(){return{title:"",category:"",eventName:"",content:"",file:"",message:"",image:""}},computed:{isValid:function(){return!!(this.title&&this.content&&this.categoryNum&&this.eventName)}},methods:{submitForm:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,l.qb)({postTitle:t.title,eventName:t.eventName,categoryNum:t.categoryNum,content:t.content,writerID:t.$store.state.userID});case 2:n=e.sent,a=n.data,console.log(a),r=new FormData,r.append("file",t.file);try{o={"Content-type":"multipart/form-data",Accept:"*/*"},c().defaults.headers.post=null,c().post("".concat({NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL,"post/upload"),r,{headers:o}).then((function(t){console.log("send ok",t.data)}))}catch(i){console.log(i.message)}finally{t.$router.push("/"),t.initForm()}case 8:case"end":return e.stop()}}),e)})))()},initForm:function(){this.title="",this.categoryNum="",this.eventName="",this.eventNameInput="",this.content="",this.userBirth=""},selectFile:function(){this.file=this.$refs.file.files[0]},onUpload:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=new FormData,n.append("file",t.file),a={"Content-type":"multipart/form-data",Accept:"*/*"},c().defaults.headers.post=null,c().post("".concat({NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL,"post/upload"),n,{headers:a}).then((function(t){console.log("send ok",t.data)}));case 5:case"end":return e.stop()}}),e)})))()}}},v=p,m=n(1001),d=(0,m.Z)(v,o,i,!1,null,"cfe6e206",null),f=d.exports,_={components:{PostAddForm:f}},h=_,g=(0,m.Z)(h,a,r,!1,null,null,null),w=g.exports},9344:function(t,e,n){n.d(e,{Bn:function(){return l},SD:function(){return r},dq:function(){return s},fR:function(){return i},qb:function(){return o}});var a=n(866);function r(t){return a.eE.get("post/posts/".concat(t))}function o(t){return a.eE.post("post/posts",t)}function i(t){return a.eE["delete"]("post/posts/".concat(t))}function s(t,e){return a.eE.put("post/posts/".concat(t),e)}function l(t){return a.eE.get("/post/postsByCat/".concat(t))}}}]);
//# sourceMappingURL=152-legacy.99ed4a7c.js.map