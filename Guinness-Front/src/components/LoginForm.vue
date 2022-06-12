<template>
  <div class="container login-page">
    <form @submit.prevent="submitForm">
      <h1>로그인</h1>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          v-model="userEmail"
        />
        <label for="floatingInput">이메일</label>
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
      <button class="btnPrimary">
        <router-link to="/signup">회원가입</router-link>
      </button>
    </form>
  </div>
</template>

<script>
import { loginUser } from "@/api/auth";
import { saveAuthToCookie, saveUserToCookie } from "@/utils/cookies";

export default {
  data() {
    return {
      userEmail: "",
      userPw: "",
    };
  },
  computed: {
    isValid() {
      if (this.userEmail && this.userPw) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    // toSignup() {
    //   this.$router.push("/signup");
    // },
    async submitForm() {
      try {
        const { data } = await loginUser({
          email: this.userEmail,
          password: this.userPw,
        });
        console.log(data.token);
        this.$store.commit("setUserEmail", this.userEmail);
        this.$store.commit("setToken", data.token);
        saveAuthToCookie(data.token);
        saveUserToCookie(data.email);

        // await this.$store.dispatch("LOGIN", userData);
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.userEmail = "";
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
button > a {
  text-decoration: none;
  color: black;
}
</style>
