<template>
  <div>
    <div class="findInfo form">
      <div class="find-info__wrapper">
        <label>아이디 찾기</label>
        <button type="button" @click="toFindId" class="btn">아이디 찾기</button>
      </div>
      <div class="find-info__wrapper">
        <label>비밀번호 찾기</label>
        <input placeholder="아이디를 입력해주세요" />
        <button type="button" @click="toFindPw" class="btn">
          비밀번호 찾기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toFindId() {
      let pageNum = 2;
      this.$emit("toFindId", pageNum);
    },
    toFindPw() {
      let pageNum = 3;
      this.$emit("toFindPw", pageNum);
    },
  },
};
</script>

<style></style>
