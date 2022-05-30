<template>
  <div class="login-page">
    <body
      class="text-center"
      data-new-gr-c-s-check-loaded="14.1016.0"
      data-gr-ext-installed=""
    >
      <main class="form-signin w-100 m-auto">
        <form
          style="width: 50%; position: absolute; left: 25%; margin-top: 10%"
        >
          <img
            class="mb-4"
            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">로그인</h1>

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

          <button class="w-100 btn btn-lg btn-primary" type="submit">
            로그인
          </button>
          <br /><br />
          <button @click="toSignup" class="w-100 btn btn-lg btn-primary">
            회원가입
          </button>
        </form>
      </main>
    </body>
  </div>
</template>

<script>
export default {
  methods: {
    toSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style></style>
