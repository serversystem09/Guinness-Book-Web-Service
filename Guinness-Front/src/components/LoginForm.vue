<template>
  <div class="container login-page">
    <form>
      <h1>로그인</h1>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">아이디</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">비밀번호</label>
      </div>
      <br />
      <button
        class="w-100 btn btn-lg btn-primary"
        type="submit"
        @click="submitForm"
      >
        로그인
      </button>
      <button @click="toSignup" class="btn btn-lg btn-primary btn-signup">
        회원가입
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    toSignup() {
      this.$router.push("/signup");
    },
    submitForm() {
      console.log("로그인 폼 제출");
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  margin-top: 10%;
}
h1 {
  margin-bottom: 60px;
}
.btn-signup {
  background-color: rgb(215, 215, 211);
}
</style>
