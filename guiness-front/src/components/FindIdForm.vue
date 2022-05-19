<template>
  <div>
    <h2>아이디 찾기</h2>
    <h3>회원에 등록된 휴대전화로 인증</h3>
    <div class="form">
      <div class="input__wrapper">
        <label for="name">이름</label>
        <input id="name" v-model="name" />
      </div>
      <div class="input__wrapper">
        <label>이메일</label>
        <div class="input--btn__wrapper">
          <div class="input--btn">
            <input v-model="phone_num" />
            <button class="btn findform_btn">인증번호 받기</button>
          </div>
          <input v-model="code" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone_num: "",
      code: "",
    };
  },
};
</script>

<style></style>
