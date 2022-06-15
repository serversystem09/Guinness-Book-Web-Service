<template>
  <div class="container">
    <header>
      <h1>게시글 작성</h1>
    </header>

    <form class="form" @submit.prevent="submitForm">
      <div class="input__wrapper">
        <label for="title">제목</label>
        <input id="title" v-model="postData.postTitle" />
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
        <input
          placeholder="소분류"
          id="input-etc"
          v-model="postData.eventName"
        />
      </div>

      <div class="input__wrapper">
        <label for="content">소개</label>
        <textarea rows="5" id="content" v-model="postData.content" />
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
        @click="submitForm"
      >
        수정
      </button>
    </form>
  </div>
</template>

<script>
import { fetchPost, editPost } from "@/api/posts";

export default {
  created() {
    this.fetchPostData();
  },
  data() {
    return {
      selected1: "대분류",
      postData: [],
      uploadimageurl: [], // 업로드한 이미지의 미리보기 기능을 위해 url 저장하는 객체
      imagecnt: 0, // 업로드한 이미지 개수 => 제출버튼 클릭시 back서버와 axios 통신하게 되는데,
    };
  },
  computed: {
    isValid() {
      if (
        this.postData.postTitle &&
        this.postData.content &&
        this.selected1 &&
        this.postData.eventName
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async submitForm() {
      try {
        const { data } = await editPost(this.$route.params.id, {
          postTitle: this.postData.postTitle,
          content: this.postData.content,
          eventName: this.postData.eventName,
          // selected2: this.selected2,
          writerID: this.$store.state.userID,
        });
        console.log(data);
        this.$router.push({
          path: `/postview/${this.$route.params.id}`,
          replace: true,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPostData() {
      try {
        const { data } = await fetchPost(this.$route.params.id);
        console.log(data);
        this.postData = data;
      } catch (error) {
        console.log(error);
      }
    },
    initForm() {
      this.title = "";
      this.selected1 = "";
      this.selected2 = "";
      this.content = "";
      this.userBirth = "";
    },
  },
};
</script>

<style>
@import "@/assets/css/common.css";
</style>
