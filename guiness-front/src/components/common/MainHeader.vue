<template>
  <div class="main-header">
    <header>
      <div>
        <router-link to="/" class="logo">파핏</router-link>
      </div>
      <nav>
        <template>
          <router-link to="/login">로그인</router-link> |
          <router-link to="/signup">회원가입</router-link> |
          <router-link to="/signup">문의하기</router-link>
        </template>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  width: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 20px;
  background-color: rgb(159, 216, 239);
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
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
