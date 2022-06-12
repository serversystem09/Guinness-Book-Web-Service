<!-- 게시글 상세 -->
<template>
  <div>
    <div class="post-card__wrapper">
      <div class="post-card">
        <div class="post-card__img">이미지 자리</div>
        <div>
          <div class="post-card__follow">
            <div>
              <span>{{ postData.writerID }}</span>
              <button type="button" class="btn-like" @click="followUser">
                팔로우&nbsp;<i
                  :class="['fa-heart', follow ? 'fas' : 'far']"
                ></i>
              </button>
            </div>
            <!-- 게시글 작성자일 경우에만 보여줌 -->
            <div v-if="this.$store.state.token" class="post-card__btns">
              <button @click="editPost" class="btn__edit">수정</button>
              <button @click="deletePost" class="btn__delete">삭제</button>
            </div>
          </div>

          <div class="post-card__contents">
            <h3 class="text__title">{{ postData.postTitle }}</h3>

            <div class="text__contents">{{ postData.content }}</div>
            <!-- 댓글 -->
            <div
              v-for="(data, index) in comments"
              :key="data.index"
              class="text__comments"
            >
              <span> {{ data.content }}</span>
              <span> {{ data.userID }}</span>
              <button @click="deleteComment(index)" class="btn_del-comment">
                삭제
              </button>
            </div>
            <button type="button" class="btn-like" @click="likePost">
              좋아요&nbsp;{{ postData.likeNum }}&nbsp;<i
                :class="['fa-heart', liked ? 'fas' : 'far']"
              ></i>
            </button>
          </div>
          <div class="comment-form">
            <input v-model="comment" /><button
              :disabled="!this.comment"
              @click="createComment"
            >
              작성
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchPost, deletePost } from "@/api/posts";
import { createComment, fetchComments, deleteComment } from "@/api/comment";
// import { createFollow } from "@/api.follow";
export default {
  created() {
    this.fetchPost();
    this.fetchComments();
  },
  mounted() {
    console.log("id:", this.$route.params.id);
  },
  data() {
    return {
      title: "제목",
      contents: "내용",
      comments: [],
      comment: "",
      commentNum: "",
      postData: [],
      postId: this.$route.params.id,
      liked: false,
      follow: false,
      username: "닉네임",
    };
  },
  methods: {
    // 게시글 상세 조회
    async fetchPost() {
      try {
        const { data } = await fetchPost(this.postId);
        console.log(data);
        this.postData = data;
      } catch (error) {
        console.log(error);
      }
    },
    // 게시글 좋아요
    async likePost() {
      console.log("좋아요");
      this.liked = !this.liked;
      if (this.liked == false) {
        this.postData.likeNum -= 1;
        console.log("좋아요");
      } else {
        this.postData.likeNum += 1;
        console.log("좋아요 취소");
      }
    },
    // 팔로우
    async followUser() {
      console.log("팔로우");
      this.follow = !this.follow;
    },
    // 게시글 삭제
    async deletePost() {
      const result = confirm("정말 삭제하시겠습니까?");
      if (result == true) {
        try {
          const { data } = await deletePost(this.postId);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
        this.$router.push("/category");
      } else {
        console.log("삭제 취소");
      }
    },
    // 게시글 수정 페이지로
    async editPost() {
      const id = this.postId;
      this.$router.push({ path: `/postview/edit/${id}`, replace: true });
    },
    // 댓글 작성
    async createComment() {
      try {
        const { data } = await createComment({
          content: this.comment,
          userID: this.$store.state.userID,
          postNum: this.postId,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        this.initForm();
        this.fetchComments();
      }
    },
    // 댓글 조회
    async fetchComments() {
      const { data } = await fetchComments(this.postId);
      this.comments = data;
      console.log(data);
      console.log("댓글", this.comments);
    },
    initForm() {
      this.comment = "";
    },
    async deleteComment(index) {
      const result = confirm("정말 삭제하시겠습니까?");
      if (result == true) {
        try {
          const { data } = await deleteComment(this.comments[index].commentNum);
          console.log(data);
          this.fetchComments();
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("삭제 취소");
      }
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
  height: auto;
  border: 1px solid rgb(226, 225, 225);
  border-radius: 5px;
  box-sizing: 10px;
  padding: 20px;
  margin-bottom: 10px;
}

h3 {
  line-height: 50px;
  border-bottom: 1px solid rgb(226, 225, 225);
  width: 100%;
}

.text__contents {
  /* border-bottom: 1px solid rgb(226, 225, 225); */
  height: auto;
  padding: 10px 0 100px 0;
  font-size: 22px;
}

.text__comments {
  border-top: 1px solid rgb(226, 225, 225);
  height: auto;
  padding: 5px 0;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
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

.btn_del-comment {
  border-style: none;
  border-radius: 5px;
  border: 1px solid rgb(180, 179, 179);
  background-color: transparent;
  margin: 0;
  padding: 3px 3px;
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
