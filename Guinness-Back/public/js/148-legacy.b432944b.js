"use strict";(self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[]).push([[148],{1148:function(t,n,s){s.r(n),s.d(n,{default:function(){return C}});var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"mypage"},[t._m(0),s("MypageInfo"),s("MypageBoard")],1)},i=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("header",[s("h1",[t._v("마이 페이지")])])}],o=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("div",{staticClass:"mypage__wrapper"},[s("div",[s("span",{staticClass:"mypage__nickname"},[t._v(t._s(t.nickname)+" 님 환영합니다.")]),s("span",{staticClass:"mypage__rank"},[t._v("   [순위: "+t._s(t.rank)+"등]")])]),s("div",[s("span",{staticClass:"mypage__membership"},[t._v(t._s(t.membership)+" 등급")]),t._v("   |   "),s("span",[t._v(t._s(t.name))]),s("span",{staticClass:"mypage__email"},[t._v("   |   "+t._s(t.email))])]),s("button",{staticClass:"mypage__btn",on:{click:t.toChangeInfo}},[t._v("개인정보 수정")])])])},a=[],l={data:function(){return{nickname:"닉네임",rank:1,membership:"gold",name:"서민영",email:"seo1234@naver.com"}},methods:{toChangeInfo:function(){this.$router.push("/changeinfo")}}},c=l,r=s(3736),_=(0,r.Z)(c,o,a,!1,null,null,null),u=_.exports,v=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"mypage__wrapper--row"},[s("div",[s("h2",[t._v("Personal")]),s("div",{staticClass:"personal__wrapper"},[s("button",{on:{click:t.toMyPost}},[t._v("작성글")]),s("button",{on:{click:t.toMyGuinness}},[t._v("기네스 참여"),s("br"),t._v("현황 보기")]),s("button",{on:{click:t.toMyComment}},[t._v("작성 댓글 보기")]),s("button",{on:{click:t.toMyInquiry}},[t._v("문의 내역")])])]),s("div",[s("h2",[t._v("follow & follower")]),s("div",{staticClass:"follow__wrapper"},[s("div",{staticClass:"btn__wrapper"},[s("button",{staticClass:"inActive",class:{active:t.isActive1},on:{click:t.followingActive}},[t._v(" following")]),t._v(" "),s("button",{staticClass:"inActive",class:{active:t.isActive2},on:{click:t.followerActive}},[t._v(" follower ")])]),t.isActive1?s("div",{staticClass:"following__contents"},[t._v("following")]):t.isActive2?s("div",{staticClass:"follower__contents"},[t._v("follower")]):t._e()])])])},p=[],f={data:function(){return{isActive1:!0,isActive2:!1}},methods:{toMyPost:function(){this.$router.push("/")},toMyGuinness:function(){this.$router.push("/")},toMyComment:function(){this.$router.push("/")},toMyInquiry:function(){this.$router.push("/")},followingActive:function(){this.isActive1=!0,this.isActive2=!1},followerActive:function(){this.isActive1=!1,this.isActive2=!0}}},m=f,h=(0,r.Z)(m,v,p,!1,null,null,null),d=h.exports,g={components:{MypageInfo:u,MypageBoard:d}},y=g,w=(0,r.Z)(y,e,i,!1,null,null,null),C=w.exports}}]);
//# sourceMappingURL=148-legacy.b432944b.js.map