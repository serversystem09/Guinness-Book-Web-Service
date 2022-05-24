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
        <template>
          <router-link to="/login">로그인</router-link> |
          <router-link to="/signup">회원가입</router-link> |
          <router-link to="/csboard">문의하기</router-link>
        </template>
      </nav>
    </header>
    <!-- <header class="p-3 bg-dark text-white">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              class="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>

          <ul
            class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
          >
            <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
            <li>
              <a href="#" class="nav-link px-2 text-white">기네스 카테고리</a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">총 기네스 순위</a>
            </li>
            <li><a href="#" class="nav-link px-2 text-white">문의</a></li>
            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control-dark text-white bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-warning">회원가입</button>
          </div>
        </div>
      </div>
    </header> -->
  </div>
</template>

<script>
import imgLogo from "@/assets/img-logo.jpg";
import textLogo from "@/assets/text-logo.jpg";

export default {
  data() {
    return {
      imgLogo,
      textLogo,
    };
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
