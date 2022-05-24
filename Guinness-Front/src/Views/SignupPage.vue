<template>
  <div class="signup-page">
    <head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
    </head>
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
          <h1 class="h3 mb-3 fw-normal">회원가입</h1>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="아이디"
              width="80%"
            />
            <label for="floatingInput">아이디</label>
            <button>중복확인</button>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="비밀번호"
            />
            <label for="floatingPassword">비밀번호</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="비밀번호 재확인"
            />
            <label for="floatingPassword">비밀번호 재확인</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">닉네임</label>
            <button>중복확인</button>
          </div>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">이메일</label>
            <button>중복확인</button>
          </div>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">휴대폰번호</label>
          </div>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">생년월일</label>
          </div>

          <br /><br />
          <button class="w-100 btn btn-lg btn-primary">회원가입</button>
        </form>
      </main>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.signup-page {
  width: 100%;
  box-sizing: border-box;
  padding: 100px 10%;
}
</style>
