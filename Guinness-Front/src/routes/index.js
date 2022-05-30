import Vue from "vue";
import VueRouter from "vue-router";
// import LoginPage from "@/Views/LoginPage";
// import SignupPage from "@/Views/SignupPage";

Vue.use(VueRouter);

export default new VueRouter({
  // url에 # 제거
  // 스토리 모드 주의할 점: 공식문서- 웹 자원들을 서버에 배포했을 때 참고하기(서버가 url을 보고 구분할 수 있도록 설정)
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      component: () => import("@/Views/MainPage.vue"),
    },
    {
      path: "/login",
      component: () => import("@/Views/LoginPage.vue"),
    },
    {
      path: "/signup",
      component: () => import("@/Views/SignupPage.vue"),
    },
    // 게시글 작성
    {
      path: "/postadd",
      component: () => import("@/Views/PostAddPage.vue"),
    },
    {
      path: "/findinfo",
      component: () => import("@/Views/FindInfoPage.vue"),
    },
    {
      path: "/changeinfo",
      component: () => import("@/Views/ChangeInfo.vue"),
    },
    {
      path: "/csboard",
      component: () => import("@/Views/CsBoard.vue"),
    },
    {
      path: "/ranking",
      component: () => import("@/Views/GuinnessRankPage.vue"),
    },
    {
      path: "/category",
      component: () => import("@/Views/CategoryBoard.vue"),
    },
    {
      path: "/mypage",
      component: () => import("@/Views/MyPage.vue"),
    },
    {
      path: "/postview",
      component: () => import("@/Views/PostView.vue"),
    },
    {
      // 없는 페이지 처리
      path: "*",
      component: () => import("@/Views/NotFoundPage.vue"),
    },
  ],
});
