<template>
  <div class="container">
    <header>
      <h1>게시글 수정</h1>
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
              <option value="1">운동</option>
              <option value="2">음식</option>
              <option value="3">춤</option>
              <option value="4">노래</option>
              <option value="5">만들기</option>
              <option value="6">캠페인</option>
              <option value="7">게임</option>
              <option value="8">기타</option>
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
      <button type="submit" class="btnPrimary" @click="submitForm">수정</button>
    </form>
  </div>
</template>

<script>
import { fetchPost, editPost } from "@/api/posts";
import axios from "axios";

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
  // computed: {
  //   isValid() {
  //     if (
  //       this.postTitle &&
  //       this.postData.content &&
  //       this.selected1 &&
  //       this.postData.eventName
  //     ) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  methods: {
    async submitForm() {
      try {
        const { data } = await editPost(this.$route.params.id, {
          postTitle: this.postData.postTitle,
          content: this.postData.content,
          eventName: this.postData.eventName,
          categoryNum: this.category,

          // selected2: this.selected2,
          writerID: this.$store.state.userID,
        });
        console.log(data);
        // this.$router.push({
        //   path: `/postview/${this.$route.params.id}`,
        //   replace: true,
        // });
      } catch (error) {
        console.log(error);
      }
      this.$router.pusth("/");
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

<style>
@import "@/assets/css/common.css";
.btnPrimary {
  padding: 10px 20px;
  background-color: rgb(255, 210, 98);
  border-radius: 5px;
  border-style: none;
  font-size: 20px;
  font-weight: 400;
  color: white;
}
</style>
