<template>
  <div class="container">
    <header>
      <h1>게시글 작성</h1>
    </header>

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
        <input placeholder="소분류" id="input-etc" v-model="selected2" />
      </div>

      <div class="input__wrapper">
        <label for="content">소개</label>
        <textarea rows="5" id="content" v-model="content" />
      </div>
      <div class="input__wrapper">
        <label for="file">첨부파일</label>
        <input id="file" type="file" @change="onImageChange" />
        <v-img
          v-for="(item, i) in uploadimageurl"
          :key="i"
          :src="item.url"
          contain
          height="150px"
          width="200px"
          style="border: 2px solid black; margin-left: 100px"
        />
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
import { uploadImage, createPost } from "@/api/index";

export default {
  data() {
    return {
      title: "",
      selected1: "대분류",
      selected2: "",
      // selected2Input: "",
      content: "",
      uploadimageurl: [], // 업로드한 이미지의 미리보기 기능을 위해 url 저장하는 객체
      imagecnt: 0, // 업로드한 이미지 개수 => 제출버튼 클릭시 back서버와 axios 통신하게 되는데,
    };
  },
  computed: {
    isValid() {
      if (this.title && this.content && this.selected1 && this.selected2) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async submitForm() {
      try {
        console.log("게시글 작성 폼 제출");
        const postData = await createPost({
          title: this.title,
          selected1: this.selected1,
          selected2: this.selected2,
          // newSelected2: this.selected2Input,
          content: this.content,
        });
        console.log(postData);
      } catch (error) {
        console.log(error.message);
      } finally {
        this.$router.push("/");
        this.initForm();
      }
    },
    initForm() {
      this.title = "";
      this.selected1 = "";
      this.selected2 = "";
      (this.selected2Input = ""), (this.content = "");
      this.userBirth = "";
    },
    async onImageChange(file) {
      // v-file-input 변경시
      try {
        if (!file) {
          return;
        }
        const formData = new FormData(); // 파일을 전송할때는 FormData 형식으로 전송
        this.uploadimageurl = []; // uploadimageurl은 미리보기용으로 사용
        file.forEach((item) => {
          formData.append("filelist", item); // formData의 key: 'filelist', value: 이미지
          const reader = new FileReader();
          reader.onload = (e) => {
            this.uploadimageurl.push({ url: e.target.result });
            // e.target.result를 통해 이미지 url을 가져와서 uploadimageurl에 저장
          };
          reader.readAsDataURL(item);
        });
        const { data } = await uploadImage({
          data: formData,
        });
        console.log(data);
        this.imagecnt = file.length;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style>
@import "@/assets/css/common.css";
</style>
