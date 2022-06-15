<template>
  <div>
    <form class="form" @submit.prevent="submitForm">
      <div class="input__wrapper">
        <label for="nickname">닉네임</label>
        <input id="nickname" v-model="nickname" />
      </div>
      <div class="input__wrapper">
        <label for="email">이메일 주소</label>
        <input id="email" v-model="email" />
      </div>
      <div class="input__wrapper">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="input__wrapper">
        <label for="passwordck">비밀번호 확인</label>
        <input type="password" id="passwordck" v-model="passwordck" />
      </div>
      <p class="validation-text">
        <span class="warning" v-if="!this.isPwSame && password">
          비밀번호가 일치하지 않습니다.
        </span>
      </p>
      <div class="input__wrapper">
        <label for="birth">생년월일</label>
        <input type="birth" id="birth" v-model="birth" />
      </div>
      <div class="input__wrapper">
        <label for="phoneNum">휴대폰 번호</label>
        <input type="phoneNum" id="phoneNum" v-model="phoneNum" />
      </div>
      <button @click="submitForm" type="submit" class="btn">변경</button>
    </form>
  </div>
</template>

<script>
import { fetchUser, updateUser } from "@/api/auth";
export default {
  data() {
    return {
      nickname: "",
      email: "",
      password: "",
      passwordck: "",
      birth: "",
      phoneNum: "",
    };
  },
  created() {
    this.fetchUser();
  },
  computed: {
    isPwSame() {
      if (this.password == this.passwordck && this.password) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async submitForm() {
      try {
        const { data } = await updateUser(this.$store.state.userID, {
          nickName: this.nickname,
          email: this.email,
          password: this.password,
          birth: this.birth,
          phoneNumber: this.phoneNum,
        });
        console.log(data);
        this.$router.push("/mypage");
      } catch (error) {
        console.log(error);
      }
    },
    async fetchUser() {
      const { data } = await fetchUser(this.$store.state.userID);
      console.log("회원정보 조회", data);
      this.nickname = data.nickName;
      this.email = data.email;
      this.birth = data.birth;
      this.phoneNum = data.phoneNum;
    },
  },
};
</script>

<style>
@import "@/assets/css/common.css";
</style>
