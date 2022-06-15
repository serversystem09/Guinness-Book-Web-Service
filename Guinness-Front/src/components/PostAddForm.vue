<template>
  <div class="container">
    <header>
      <h1>게시글 작성</h1>
    </header>

    <!-- 첨부 파일 -->

    <form class="form" @submit.prevent="onUpload" enctype="multipart/form-data">
      <div class="input__wrapper">
        <label for="file">첨부파일</label>
        <input id="file" type="file" @change="selectFile" ref="file" />
        <button @click="onUpload">이미지 업로드</button>
      </div>
    </form>

    <form
      class="form"
      @submit.prevent="submitForm"
      enctype="multipart/form-data"
    >
      <div class="input__wrapper">
        <label for="title">제목</label>
        <input id="title" v-model="title" />
      </div>
      <div class="input__wrapper">
        <label>분류</label>
        <div class="select__wrapper">
          <div id="select-1">
            <select v-model="categoryNum">
              <option selected>대분류</option>
              <option value="1">체육</option>
              <option value="2">음식</option>
              <option value="3">춤</option>
              <option value="4">노래</option>
              <option value="5">공예</option>
              <option value="6">사회 캠페인</option>
              <option value="7">오락</option>
            </select>
          </div>
        </div>
      </div>
      <div class="input__wrapper">
        <label>소분류</label>
        <input placeholder="소분류" id="input-etc" v-model="eventName" />
      </div>

      <div class="input__wrapper">
        <label for="content">소개</label>
        <textarea rows="5" id="content" v-model="content" />
      </div>
      <div class="input__wrapper">
        <label for="file">첨부파일</label>
        <input id="file" type="file" @change="selectFile" ref="file" />
        <!-- <button @click="onUpload">이미지 업로드</button> -->
      </div>

      <button
        :disabled="!isValid"
        type="submit"
        class="btnInActive"
        :class="{ btnPrimary: isValid }"
      >
        작성
      </button>
    </form>
  </div>
</template>

<script>
import { createPost } from "@/api/posts";
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      title: "",
      categoryNum: "",
      eventName: "",
      // eventNameInput: "",
      content: "",
      file: "",
      message: "",
      image: "",
    };
  },
  computed: {
    isValid() {
      if (this.title && this.content && this.categoryNum && this.eventName) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async submitForm() {
      // console.log("게시글 작성 폼 제출", file);
      const { data } = await createPost({
        postTitle: this.title,
        eventName: this.eventName,
        categoryNum: this.categoryNum,
        content: this.content,
        writerID: this.$store.state.userID,
      });
      console.log(data);
      // 첨부파일
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        // const { file } = await uploadImg(formData);
        const headers = {
          "Content-type": "multipart/form-data",
          Accept: "*/*",
        };
        axios.defaults.headers.post = null;
        axios
          .post(`${process.env.VUE_APP_API_URL}post/upload`, formData, {
            headers,
          })
          .then((res) => {
            // headers: {…} 로 들어감.
            console.log("send ok", res.data);
          });
      } catch (error) {
        console.log(error.message);
      } finally {
        this.$router.push("/");
        this.initForm();
      }
    },
    initForm() {
      this.title = "";
      this.categoryNum = "";
      this.eventName = "";
      (this.eventNameInput = ""), (this.content = "");
      this.userBirth = "";
    },
    // 이벤트 감지 - 인자로 선택된 파일 객체를 전달받음 -> 해당 객체를 image에 할당
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    async onUpload() {
      const formData = new FormData();
      formData.append("file", this.file);
      const headers = {
        "Content-type": "multipart/form-data",
        Accept: "*/*",
      };
      axios.defaults.headers.post = null;
      axios
        .post(`${process.env.VUE_APP_API_URL}post/upload`, formData, {
          headers,
        })
        .then((res) => {
          // headers: {…} 로 들어감.
          console.log("send ok", res.data);
        });
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/common.css";
#select-1 {
  width: 100%;
}

.dropbox {
  outline: 2px dashed #aaa;
  background: #7fb4dd;
  width: 300px;
  height: 300px;
  position: relative;
  margin: 0 auto;
}
.dropbox > h2 {
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 2;
}
.input-file {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
}
</style>
