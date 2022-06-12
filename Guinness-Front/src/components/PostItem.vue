<!-- 게시글 상세 -->
<template>
  <div>
    <div class="post-card__wrapper">
      <div class="post-card">
        <div class="post-card__img">이미지 자리</div>
        <div>
          <div class="post-card__follow">
            <div>
              <span>{{ username }}</span>
              <button type="button" class="btn-like" @click="followUser">
                팔로우&nbsp;<i
                  :class="['fa-heart', follow ? 'fas' : 'far']"
                ></i>
              </button>
            </div>
            <!-- 게시글 작성자일 경우에만 보여줌 -->
            <div v-if="this.$store.state.token" class="post-card__btns">
              <button class="btn__edit">수정</button>
              <button class="btn__delete">삭제</button>
            </div>
          </div>

          <div class="post-card__contents">
            <h2 class="text__title">{{ title }}</h2>

            <div class="text__contents">{{ contents }}</div>
            <!-- 댓글 -->
            <div class="text__comments">{{ comments }}</div>
            <div>sns</div>
            <button type="button" class="btn-like" @click="likePost">
              좋아요&nbsp;<i :class="['fa-heart', liked ? 'fas' : 'far']"></i>
            </button>
          </div>
          <div class="comment-form"><input /><button>작성</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive } from "vue";
// import axios from "axios";
import { fetchPost } from "@/api/posts";

export default {
  created() {
    this.fetchPost();
  },
  data() {
    return {
      title: "제목",
      contents: "내용",
      comments: "댓글",
      postItems: [],
      postId: "",
      liked: false,
      follow: false,
      username: "닉네임",
    };
  },
  methods: {
    async fetchPost() {
      const { postData } = await fetchPost(this.postId);
      this.postItems = postData;
      console.log("특정 게시글 정보 조회", this.postItems);
    },
    async likePost() {
      console.log("좋아요");
      this.liked = !this.liked;
    },
    async followUser() {
      console.log("팔로우");
      this.follow = !this.follow;
    },
  },
};
</script>

<style scoped>
.post-card__wrapper {
  width: 100%;
}

.post-card {
  width: 100%;
  display: flex;
  gap: 30px;
}

.post-card__img {
  width: 500px;
  height: 500px;
  background-color: #f9f9f9;
  border: 1px solid rgb(226, 225, 225);
  border-radius: 5px;
  margin-top: 50px;
}

.post-card__contents {
  width: 500px;
  height: 500px;
  border: 1px solid rgb(226, 225, 225);
  border-radius: 5px;
  box-sizing: 10px;
  padding: 20px;
  margin-bottom: 10px;
}

h2 {
  line-height: 50px;
  border-bottom: 1px solid rgb(226, 225, 225);
}

.text__contents {
  border-bottom: 1px solid rgb(226, 225, 225);
  height: 220px;
}

.text__comments {
  border-bottom: 1px solid rgb(226, 225, 225);
  height: 120px;
}

.comment-form {
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.comment-form > input {
  width: 400px;
  border: 1px solid rgb(226, 225, 225);
  border-radius: 5px;
  text-indent: 10px;
}

.comment-form > button {
  width: 90px;
  border-style: none;
  border-radius: 5px;
  background-color: rgb(255, 210, 98);
}

.btn-like {
  border-style: none;
  border-radius: 5px;
  border: 1px solid rgb(180, 179, 179);
  background-color: transparent;
  margin: 10px 0;
  padding: 3px 10px;
}

.post-card__follow {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-card__follow > div > button {
  margin-left: 10px;
}

.post-card__btns > .btn__edit {
  width: 90px;
  border-style: none;
  border-radius: 5px;
  background-color: rgb(255, 210, 98);
  padding: 5px 0;
}

.post-card__btns > .btn__delete {
  width: 90px;
  border-style: none;
  border-radius: 5px;
  background-color: rgb(190, 190, 190);
  color: rgb(16, 16, 16);
  padding: 5px 0;
}
</style>
