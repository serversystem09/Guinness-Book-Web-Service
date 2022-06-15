<template>
  <div class="signup-page">
    <form @submit.prevent="submitForm">
      <h1>회원가입</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingPassword"
          placeholder="이메일"
          v-model="userEmail"
        />
        <label for="floatingPassword">이메일</label>
        <button
          class="btnInActive"
          type="button"
          :class="{ btnPrimary: isEmailValid }"
        >
          중복확인
        </button>
      </div>
      <p class="validation-text">
        <span class="warning" v-if="!this.isEmailValid && this.userEmail">
          이메일 양식을 확인해주세요.
        </span>
      </p>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="userNickname"
        />
        <label for="floatingPassword">닉네임</label>
        <!-- <button>중복확인</button> -->
      </div>
      <!-- <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="아이디"
          width="80%"
          v-model="userId"
        />
        <label for="floatingInput">아이디</label>
        <button>중복확인</button>
      </div> -->
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="비밀번호"
          v-model="userPw"
        />
        <label for="floatingPassword">비밀번호</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="비밀번호 재확인"
          v-model="userPwCheck"
        />
        <label for="floatingPassword">비밀번호 재확인</label>
      </div>
      <p class="validation-text">
        <span class="warning" v-if="!this.isPwSame && userPw">
          비밀번호가 일치하지 않습니다.
        </span>
      </p>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="userPhone"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
        />
        <label for="floatingPassword">휴대폰번호</label>
      </div>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="userBirth"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
        />
        <label for="floatingPassword">생년월일</label>
      </div>

      <br />
      <button
        :disabled="!isValid"
        @click="submitForm"
        class="btnInActive"
        type="button"
        :class="{ btnPrimary: isValid }"
      >
        회원가입
      </button>
    </form>
  </div>
</template>

<script>
import { registerUser } from "@/api/auth";
import { validateEmail } from "@/utils/validation";

export default {
  data() {
    return {
      // userId: "",
      userPw: "",
      userPwCheck: "",
      userNickname: "",
      userEmail: "",
      userPhone: "",
      userBirth: "",
      userRanking: "baby",
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.userEmail);
    },
    isValid() {
      if (
        this.userEmail &&
        // this.userId &&
        this.userPw &&
        this.userPwCheck
        // this.userPhone &&
        // this.userBirth &&
        // this.userRanking
      ) {
        return true;
      } else {
        return false;
      }
    },
    isPwSame() {
      if (this.userPw == this.userPwCheck && this.userPw) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    // 회원가입 버튼
    async submitForm() {
      try {
        console.log("폼 제출");
        const userData = {
          // userID: this.userId,
          password: this.userPw,
          nickname: this.userNickname,
          email: this.userEmail,
          phone: this.userPhone,
          birth: this.userBirth,
        };
        const { data } = await registerUser(userData);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        this.initForm();
        this.$router.push("/");
      }
    },
    initForm() {
      this.userId = "";
      this.userPw = "";
      this.userNickname = "";
      this.userEmail = "";
      // this.userPhone = "";
      // this.userBirth = "";
    },
  },
};
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
