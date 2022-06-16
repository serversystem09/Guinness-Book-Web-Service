"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[313],{9313:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PostAddForm")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("form",{staticClass:"form",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("div",{staticClass:"input__wrapper"},[n("label",{attrs:{for:"title"}},[t._v("제목")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",{staticClass:"input__wrapper"},[n("label",[t._v("분류")]),n("div",{staticClass:"select__wrapper"},[n("div",{attrs:{id:"select-1"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.categoryNum,expression:"categoryNum"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.categoryNum=e.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:""}},[t._v("대분류")]),n("option",{attrs:{selected:""}},[t._v("대분류")]),n("option",{attrs:{value:"1"}},[t._v("운동")]),n("option",{attrs:{value:"2"}},[t._v("음식")]),n("option",{attrs:{value:"3"}},[t._v("춤")]),n("option",{attrs:{value:"4"}},[t._v("노래")]),n("option",{attrs:{value:"5"}},[t._v("만들기")]),n("option",{attrs:{value:"6"}},[t._v("캠페인")]),n("option",{attrs:{value:"7"}},[t._v("게임")]),n("option",{attrs:{value:"8"}},[t._v("기타")])])])])]),n("div",{staticClass:"input__wrapper"},[n("label",[t._v("소분류")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.eventName,expression:"eventName"}],attrs:{placeholder:"소분류",id:"input-etc"},domProps:{value:t.eventName},on:{input:function(e){e.target.composing||(t.eventName=e.target.value)}}})]),n("div",{staticClass:"input__wrapper"},[n("label",{attrs:{for:"content"}},[t._v("소개")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{rows:"5",id:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),n("div",{staticClass:"input__wrapper"},[n("label",{attrs:{for:"file"}},[t._v("첨부파일")]),n("input",{ref:"file",attrs:{id:"file",type:"file"},on:{change:t.selectFile}})]),n("button",{staticClass:"btnInActive",class:{btnPrimary:t.isValid},attrs:{disabled:!t.isValid,type:"submit"}},[t._v(" 작성 ")])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("게시글 작성")])])}],r=n(9344),l=n(6166),u=n.n(l),c={components:{},data(){return{title:"",categoryNum:"",eventName:"",content:"",file:"",message:"",image:""}},computed:{isValid(){return!!(this.title&&this.content&&this.categoryNum&&this.eventName)}},methods:{async submitForm(){const{data:t}=await(0,r.qb)({postTitle:this.title,eventName:this.eventName,categoryNum:this.categoryNum,content:this.content,writerID:this.$store.state.userID});console.log(t);const e=new FormData;e.append("file",this.file);try{const t={"Content-type":"multipart/form-data",Accept:"*/*"};u().defaults.headers.post=null,u().post(`${{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL}post/upload`,e,{headers:t}).then((t=>{console.log("send ok",t.data)}))}catch(n){console.log(n.message)}finally{this.$router.push("/"),this.initForm()}},initForm(){this.title="",this.categoryNum="",this.eventName="",this.eventNameInput="",this.content="",this.userBirth=""},selectFile(){this.file=this.$refs.file.files[0]},async onUpload(){const t=new FormData;t.append("file",this.file);const e={"Content-type":"multipart/form-data",Accept:"*/*"};u().defaults.headers.post=null,u().post(`${{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL}post/upload`,t,{headers:e}).then((t=>{console.log("send ok",t.data)}))}}},p=c,m=n(1001),v=(0,m.Z)(p,o,i,!1,null,"093287f9",null),d=v.exports,f={components:{PostAddForm:d}},_=f,h=(0,m.Z)(_,a,s,!1,null,null,null),g=h.exports},9344:function(t,e,n){n.d(e,{Bn:function(){return l},SD:function(){return s},dq:function(){return r},fR:function(){return i},qb:function(){return o}});var a=n(866);function s(t){return a.eE.get(`post/posts/${t}`)}function o(t){return a.eE.post("post/posts",t)}function i(t){return a.eE["delete"](`post/posts/${t}`)}function r(t,e){return a.eE.put(`post/posts/${t}`,e)}function l(t){return a.eE.get(`/post/postsByCat/${t}`)}}}]);
//# sourceMappingURL=313.3ba78a79.js.map