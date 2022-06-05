<template>
  <div class="container login-page">
    <form @submit.prevent="submitForm">
      <h1>로그인</h1>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          v-model="userId"
        />
        <label for="floatingInput">아이디</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          v-model="userPw"
        />
        <label for="floatingPassword">비밀번호</label>
      </div>
      <br />
      <button
        :disabled="!isValid"
        type="button"
        @click="submitForm"
        class="btnInActive"
        :class="{ btnPrimary: isValid }"
      >
        로그인
      </button>
      <button @click="toSignup" class="btnPrimary">회원가입</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      userPw: "",
    };
  },
  computed: {
    isValid() {
      if (this.userId && this.userPw) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    toSignup() {
      this.$router.push("/signup");
    },
    async submitForm() {
      try {
        const userData = {
          userid: this.userId,
          password: this.userPw,
        };
        await this.$store.dispatch("LOGIN", userData);
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      } finally {
        this.initForm();
        this.$router.push("/");
      }
    },
    initForm() {
      this.userId = "";
      this.userPw = "";
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
