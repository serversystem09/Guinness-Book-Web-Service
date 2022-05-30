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
        <input type="passwordck" id="passwordck" v-model="passwordck" />
      </div>
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
  methods: {
    submitForm() {
      this.$router.push("/mypage");
    },
  },
};
</script>

<style>
@import "@/assets/css/common.css";
</style>
