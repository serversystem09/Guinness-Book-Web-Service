<template>
  <div>
    <form class="form">
      <div class="input--btn__wrapper" @submit.prevent="submitForm">
        <h5>개인정보 보호를 위해 비밀번호를 입력해주세요.</h5>
        <div class="input--btn">
          <input v-model="password" placeholder="비밀번호를 입력해주세요." />
          <button @click="submitForm" class="btn findform_btn">확인</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    submitForm() {
      this.router.$push("/");
      let step = 2;
      this.$emit("submitForm", step);
    },
  },
};
</script>

<style>
@import "@/assets/css/common.css";
</style>
