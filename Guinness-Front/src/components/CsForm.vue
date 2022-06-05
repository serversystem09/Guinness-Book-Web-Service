<template>
  <div class="csboard">
    <form @submit.prevent="submitForm">
      <h1>문의게시판</h1>
      <div class="typo--col">
        <label class="left">제목</label>
        <textarea
          size="40"
          name="subject"
          id="subject"
          style="height: 30pt"
          class="form-control"
          v-model="title"
        ></textarea>
      </div>
      <div class="typo--col" style="margin-bottom: 10px">
        <label class="left">글쓰기</label>
        <textarea
          size="1000"
          name="body"
          id="body"
          class="form-control"
          rows="10"
          v-model="content"
        ></textarea>
      </div>
      <div class="typo--col">
        <label class="left">첨부파일</label>
        <label
          ><input type="file" name="attachment" id="FileOpenInput"
        /></label>
      </div>

      <button
        type="button"
        class="btnInActive"
        :class="{ btnPrimary: isValid }"
        @click="submitForm"
      >
        글쓰기
      </button>
      <br />
    </form>
  </div>
</template>

<script>
import { createInquiry } from "@/api/index";
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  computed: {
    isValid() {
      if (this.title && this.content) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async submitForm() {
      try {
        console.log("문의하기 폼 제출");
        const data = {
          title: this.title,
          content: this.content,
        };
        const { inquiryData } = await createInquiry(data);
        console.log(inquiryData);
      } catch (error) {
        console.log(error.message);
      } finally {
        this.initForm();
        this.$router.push("/");
      }
    },
    initForm() {
      this.title = "";
      this.content = "";
    },
  },
};
</script>

<style scoped>
.csboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 210px 0%;
}

form {
  width: 700px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: 600;
  font-size: 20px;
}

.typo {
  display: flex;
  flex-direction: row;

  justify-content: left;
}

.typo--col {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap: 10px;
}
</style>
