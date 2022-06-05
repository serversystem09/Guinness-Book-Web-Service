<template>
  <div class="main-header">
    <header>
      <div class="header-wrapper">
        <router-link to="/" class="logo"
          ><img :src="imgLogo" class="imgLogo" /><img
            :src="textLogo"
            class="textLogo"
        /></router-link>
        <router-link to="/category">기네스 카테고리</router-link>
        <router-link to="/ranking">총 기네스 순위</router-link>
      </div>
      <nav>
        <template v-if="isUserLogin">
          <span class="username">{{ $store.state.userId }}</span>
          <a href="javascript:;" @click="logoutUser">로그아웃</a> |
        </template>
        <template v-else>
          <router-link to="/login">로그인</router-link> |
          <router-link to="/signup">회원가입</router-link> |
        </template>

        <router-link to="/csboard">문의하기</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
import imgLogo from "@/assets/img-logo.jpg";
import textLogo from "@/assets/text-logo.jpg";
import { deleteCookie } from "@/utils/cookies";

export default {
  data() {
    return {
      imgLogo,
      textLogo,
      isActive1: "false",
      isActive2: "false",
    };
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUserId");
      this.$store.commit("clearToken");
      deleteCookie("til_auth");
      deleteCookie("til_user");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/common.css";
.main-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 30px;
  background-color: white;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}

.header-wrapper > a {
  color: rgb(56, 56, 56);
}

nav > a {
  color: rgb(56, 56, 56);
}
.main-header > header > .header-wrapper > a:active {
  color: red;
}
.main-header > header > .header-wrapper > a:hover {
  color: rgb(255, 210, 98);
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.imgLogo {
  width: 50px;
  margin-right: 10px;
}

.textLogo {
  width: 120px;
}

a {
  color: black;
  font-size: 18px;
  text-decoration: none;
}
a.logo {
  font-size: 24px;
  font-weight: 800;
}
</style>
