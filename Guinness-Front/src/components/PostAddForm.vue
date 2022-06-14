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
      <!-- 첨부 파일 -->
      <div class="input__wrapper">
        <label for="file">첨부파일</label>
        <input id="file" type="file" @change="selectFile" />
        <button type="button" @click="onUpload">이미지 업로드</button>
        <vue-upload-multiple-image
          @upload-success="uploadImageSuccess"
          @edit-image="editImage"
          @before-remove="beforeRemove"
          :data-images="images"
          :dragText="drag"
          :browseText="browseText"
        ></vue-upload-multiple-image>
      </div>
      <div class="dropbox">
        <input
          class="input-file"
          type="file"
          name="myImage"
          @change="upload($event.target.name, $event.target.files)"
          @drop="upload($event.target.name, $event.target.files)"
        />
        <h2>파일을 드래그해서 드랍해주세요.</h2>
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
    <!-- <v-img
      v-for="(item, i) in uploadimageurl"
      :key="i"
      :src="item.url"
      contain
      height="150px"
      width="200px"
      style="border: 2px solid black; margin-left: 100px"
    /> -->
  </div>
</template>

<script>
import { createPost, uploadImg } from "@/api/posts";
import axios from "axios";
// import { dateFormat } from "@/utils/date";
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      title: "",
      categoryNum: "",
      eventName: "",
      // eventNameInput: "",
      content: "",
      uploadimageurl: [], // 업로드한 이미지의 미리보기 기능을 위해 url 저장하는 객체
      imagecnt: 0, // 업로드한 이미지 개수 => 제출버튼 클릭시 back서버와 axios 통신하게 되는데,
      images: [],
      drag: "",
      browseText: "업로드",
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
      try {
        console.log("게시글 작성 폼 제출");
        const { data } = await createPost({
          postTitle: this.title,
          eventName: this.eventName,
          categoryNum: this.categoryNum,
          content: this.content,
          writerID: this.$store.state.userID,
        });

        console.log(data);
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
    upload(name, files) {
      const formData = new FormData();
      formData.append(name, files[0], files[0].name);
      const url = "http://localhost:3000/post/upload";
      axios.post(url, formData).then((response) => {
        console.log(response);
      });
    },
    // 이벤트 감지 - 인자로 선택된 파일 객체를 전달받음 -> 해당 객체를 image에 할당
    selectFile(file) {
      this.image = file;
    },
    async onUpload() {
      const formData = new FormData();
      formData.append("image", this.image);
      try {
        const { data } = await uploadImg(formData, {
          headers: {
            "Content-Type": "multipart / form - data",
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      // Upload image api
      axios
        .post(`${process.env.VUE_APP_API_URL}post/uploadphoto`, formData)
        .then((response) => {
          console.log(response);
        });
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {
        console.log("이미지 삭제 안함");
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
  },
  // 첨부 파일
  // onFileSelected() {
  //   // this.seletedFile = event.target.files[0];
  //   //  const event = this.$refs['image'].files[0]
  //   let form = new FormData();
  //   let image = this.$refs["image"].files[0];

  //   form.append("image", image);

  //   axios
  //     .post(`${process.env.VUE_APP_API_URL}post/uploadphoto`, form, {
  //       header: { "Content-Type": "multipart/form-data" },
  //     })
  //     .then(({ data }) => {
  //       this.images = data;
  //     })
  //     .catch((err) => console.log(err));
  // },
  // onUpload() {
  //   const fd = new FormData();
  //   fd.append("image", this.selectedFile, this.selectedFile.name);
  //   axios
  //     .post(`${process.env.VUE_APP_API_URL}post/uploadphoto`, fd, {
  //       header: { "Content-Type": "multipart/form-data" },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // },
  // onFileChange(e) {
  //   console.log(e);
  //   const file = e.target.files[0];
  //   this.url = URL.createObjectURL(file);
  //   var imagefile = document.querySelector("#imageUpload");
  //   console.log(file);
  //   console.log(imagefile.files[0]);
  //   let formData = new FormData();

  //   formData.append("image", file);
  //   this.$store.dispatch("uploadImage", formData);
  // },
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
