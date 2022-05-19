<template>
  <div class="container">
    <header><h1>회원정보 찾기</h1></header>
    <FindInfoForm
      @toFindId="toFindId"
      @toFindPw="toFindPw"
      :pageNum="pageNum"
      v-if="pageNum == 1"
    ></FindInfoForm>
    <FindIdForm v-else-if="pageNum == 2"></FindIdForm>
    <FindPwForm v-else-if="pageNum == 3"></FindPwForm>
  </div>
</template>

<script>
import FindInfoForm from "../components/FindInfoForm.vue";
import FindIdForm from "../components/FindIdForm.vue";
import FindPwForm from "../components/FindPwForm.vue";
export default {
  components: { FindInfoForm, FindIdForm, FindPwForm },
  data() {
    return {
      pageNum: 1,
    };
  },
  methods: {
    toFindId(pageNum) {
      this.pageNum = pageNum;
    },
    toFindPw(pageNum) {
      this.pageNum = pageNum;
    },
  },
};
</script>

<style></style>
