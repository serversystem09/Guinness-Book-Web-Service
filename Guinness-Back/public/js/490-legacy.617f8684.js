"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[490],{3490:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-view"},[n("PostItem")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"post-card__wrapper"},[n("div",{staticClass:"post-card"},[n("div",{staticClass:"post-card__img"},[t._v("이미지 자리")]),n("div",[n("div",{staticClass:"post-card__follow"},[n("div",[n("span",[t._v(t._s(t.postData.writerID))]),this.$store.state.userID!=this.postData.writerID?n("button",{staticClass:"btn-like",attrs:{type:"button"},on:{click:t.followUser}},[t._v(" 팔로우 "),n("i",{class:["fa-heart",t.follow?"fas":"far"]})]):t._e(),this.$store.state.userID==this.postData.writerID?n("div",[n("span",{staticClass:"myPost"},[t._v(" [내가 쓴 글] ")])]):t._e()]),this.$store.state.userID==this.postData.writerID?n("div",{staticClass:"post-card__btns"},[n("button",{staticClass:"btn__edit",on:{click:t.editPost}},[t._v("수정")]),n("button",{staticClass:"btn__delete",on:{click:t.deletePost}},[t._v("삭제")])]):t._e()]),n("div",{staticClass:"post-card__contents"},[n("h3",{staticClass:"text__title"},[t._v(t._s(t.postData.postTitle))]),n("div",{staticClass:"text__contents"},[t._v(t._s(t.postData.content))]),t._l(t.comments,(function(e,r){return n("div",{key:e.index,staticClass:"text__comments"},[n("span",[t._v(" "+t._s(e.content))]),n("span",[t._v(" "+t._s(e.userID))]),n("button",{staticClass:"btn_del-comment",on:{click:function(e){return t.deleteComment(r)}}},[t._v(" 삭제 ")])])})),n("button",{staticClass:"btn-like",attrs:{type:"button"},on:{click:t.likePost}},[t._v(" 좋아요 "+t._s(t.postData.likeNum)+"  ")]),n("button",{staticClass:"btn-report",attrs:{type:"button"},on:{click:t.reportPost}},[t._v(" 신고하기 "+t._s(t.postData.reportCount)+"  ")])],2),n("div",{staticClass:"comment-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),n("button",{attrs:{disabled:!this.comment},on:{click:t.createComment}},[t._v(" 작성 ")])])])])])])},c=[],a=n(6198),u=(n(1539),n(8975),n(9344)),i=n(866);function l(t){return i.eE.post("comm/comment",t)}function p(t){return i.eE.get("comm/comments/".concat(t))}function m(t){return i.eE["delete"]("comm/comment/".concat(t))}var f=n(8383),v={created:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchPost();case 2:return e.next=4,t.fetchComments();case 4:return e.next=6,t.fetchFollowee();case 6:return e.next=8,t.checkFollow();case 8:case"end":return e.stop()}}),e)})))()},mounted:function(){console.log("id:",this.$route.params.id)},data:function(){return{title:"제목",contents:"내용",comments:[],comment:"",commentNum:"",postData:[],postId:this.$route.params.id,liked:!1,follow:!1,username:"닉네임",writerID:"",followeeList:[]}},methods:{checkFollow:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.writerID;case 3:n=e.sent,r=t.followeeList.some((function(t){return t.followeeID==n})),t.follow=r,console.log("내가 이미 글쓴이를 팔로우 중인지",r),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},fetchPost:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.SD)(t.postId);case 3:n=e.sent,r=n.data,console.log("게시글 데이터",r),t.postData=r,t.writerID=r.writerID,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},likePost:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,0!=t.liked){e.next=11;break}return t.liked=!t.liked,e.next=5,(0,u.n9)(t.postId);case 5:n=e.sent,r=n.data,console.log("좋아요",r),t.postData.likeNum-=1,e.next=12;break;case 11:return e.abrupt("return",t.postId);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),console.log(e.t0);case 17:return e.prev=17,t.fetchPost(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})))()},reportPost:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.mK)(t.postId);case 3:n=e.sent,r=n.data,console.log("게시글 신고",r),t.$router.go(t.$router.currentRoute),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:return e.prev=12,t.fetchPost(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},fetchFollowee:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.kQ)(t.$store.state.userID);case 3:n=e.sent,r=n.data,t.followeeList=r,console.log("나의 팔로위 목록 배열로 조회",t.followeeList),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},followUser:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.postData.writerID,r=t.$store.state.userID,0!=t.follow){e.next=12;break}return e.next=6,(0,f.PX)(r,n);case 6:o=e.sent,s=o.data,t.follow=!0,console.log("팔로우",s),e.next=16;break;case 12:return e.next=14,(0,f.VR)(r,n);case 14:t.follow=!1,console.log("팔로우 취소");case 16:e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))()},deletePost:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=confirm("정말 삭제하시겠습니까?"),1!=n){e.next=16;break}return e.prev=2,e.next=5,(0,u.fR)(t.postId);case 5:r=e.sent,o=r.data,console.log(o),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:t.$router.push("/category"),e.next=17;break;case 16:console.log("삭제 취소");case 17:case"end":return e.stop()}}),e,null,[[2,10]])})))()},editPost:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.postId,t.$router.push({path:"/edit/".concat(n),replace:!0});case 2:case"end":return e.stop()}}),e)})))()},createComment:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({content:t.comment,userID:t.$store.state.userID,postNum:t.postId});case 3:n=e.sent,r=n.data,console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:return e.prev=11,t.initForm(),t.fetchComments(),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[0,8,11,15]])})))()},fetchComments:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p(t.postId);case 2:n=e.sent,r=n.data,t.comments=r,console.log(r),console.log("댓글",t.comments);case 7:case"end":return e.stop()}}),e)})))()},initForm:function(){this.comment=""},deleteComment:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function n(){var r,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=confirm("정말 삭제하시겠습니까?"),1!=r){n.next=16;break}return n.prev=2,n.next=5,m(e.comments[t].commentNum);case 5:o=n.sent,s=o.data,console.log(s),e.fetchComments(),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](2),console.log(n.t0);case 14:n.next=17;break;case 16:console.log("삭제 취소");case 17:case"end":return n.stop()}}),n,null,[[2,11]])})))()}}},d=v,h=n(3736),w=(0,h.Z)(d,s,c,!1,null,"3d667940",null),g=w.exports,k={components:{PostItem:g}},_=k,x=(0,h.Z)(_,r,o,!1,null,null,null),b=x.exports},8383:function(t,e,n){n.d(e,{$e:function(){return c},PX:function(){return o},VR:function(){return s},kQ:function(){return a}});n(2222);var r=n(866);function o(t,e){return r.eE.post("foll/create/".concat(t,"/").concat(e))}function s(t,e){return r.eE["delete"]("foll/delete/".concat(t,"/").concat(e))}function c(t){return r.eE.get("foll/followers/".concat(t))}function a(t){return r.eE.get("foll/followees/".concat(t))}},9344:function(t,e,n){n.d(e,{Bn:function(){return i},SD:function(){return o},Ti:function(){return u},dq:function(){return a},fR:function(){return c},mK:function(){return p},n9:function(){return l},qb:function(){return s}});var r=n(866);function o(t){return r.eE.get("post/posts/".concat(t))}function s(t){return r.eE.post("post/posts",t)}function c(t){return r.eE["delete"]("post/posts/".concat(t))}function a(t,e){return r.eE.put("post/posts/".concat(t),e)}function u(){return r.eE.post("/post/uploadphoto")}function i(t){return r.eE.get("/post/postsByCat/".concat(t))}function l(t){return r.eE.put("/post/like/".concat(t))}function p(t){return r.eE.put("/post/report/".concat(t))}}}]);
//# sourceMappingURL=490-legacy.617f8684.js.map