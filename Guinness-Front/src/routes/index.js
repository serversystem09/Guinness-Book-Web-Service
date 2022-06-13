import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

// import LoginPage from "@/Views/LoginPage";
// import SignupPage from "@/Views/SignupPage";

Vue.use(VueRouter);

const router = new VueRouter({
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
      meta: {
        auth: true,
      },
    },

    {
      path: "/findinfo",
      component: () => import("@/Views/FindInfoPage.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/changeinfo",
      component: () => import("@/Views/ChangeInfo.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/csboard",
      component: () => import("@/Views/CsBoard.vue"),
      meta: {
        auth: true,
      },
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
      meta: {
        auth: true,
      },
    },
    {
      path: "/myinquiry",
      component: () => import("@/Views/MyInquiry.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/mycomment",
      component: () => import("@/Views/MyComment.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/postview/:id",
      component: () => import("@/Views/PostView.vue"),
    },
    // 게시글 수정
    {
      path: "/postview/edit/:id",
      component: () => import("@/Views/PostEditPage.vue"),
      meta: {
        auth: true,
      },
    },
    {
      // 없는 페이지 처리
      path: "*",
      component: () => import("@/Views/NotFoundPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 인증이 필요한 페이지 && 로그인 하지 않은 경우
  if (to.meta.auth && !store.getters.isLogin) {
    alert("로그인이 필요한 페이지입니다.");
    next("/login");
    // console.log("인증이 필요합니다.");
  } else {
    next();
  }
});

export default router;
