<template>
  <div class="contents">
    <form class="form" @submit.prevent="submitForm">
      <div class="input__wrapper">
        <label for="title">제목</label>
        <input id="title" v-model="title" />
      </div>
      <div class="input__wrapper">
        <label>분류</label>
        <div class="select__wrapper">
          <div id="select-1">
            <select v-model="selected1">
              <option selected>대분류</option>
            </select>
          </div>
          <div id="select-2">
            <select v-model="selected2">
              <option selected>소분류</option>
            </select>
          </div>
        </div>
      </div>
      <div class="input__wrapper">
        <label for="file">첨부파일</label>
        <input id="file" type="file" />
      </div>
      <div class="input__wrapper">
        <label for="content">소개</label>
        <textarea rows="5" id="content" v-model="content" />
      </div>
      <button type="submit" class="btn">작성</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      selected1: "대분류",
      selected2: "소분류",
      content: "",
    };
  },
  methods: {
    submitForm() {
      console.log("제출");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
