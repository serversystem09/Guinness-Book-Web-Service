<template>
  <div class="signup-page">
    <form>
      <h1>회원가입</h1>
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

      <br />
      <button class="w-100 btn btn-lg btn-primary">회원가입</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.signup-page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 100px 0%;
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
.form-floating {
  display: flex;
}

.form-floating > button {
  width: 30%;
  border-radius: 5px;
  border-style: none;
  gap: 5px;
  margin-left: 10px;
}
</style>
