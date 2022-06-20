<!-- 게시글 상세 -->
<template>
  <div>
    <div class="post-card__wrapper">
      <div class="post-card">
        <div class="post-card__img">
          <img :src="img" alt="" style="width: 100%" />
        </div>
        <div>
          <div class="post-card__follow">
            <div>
              <span>작성자 ID: {{ postData.writerID }}</span>
              <button
                v-if="this.$store.state.userID != this.postData.writerID"
                type="button"
                class="btn-like"
                @click="followUser"
              >
                팔로우&nbsp;<i
                  :class="['fa-heart', follow ? 'fas' : 'far']"
                ></i>
              </button>
              <div v-if="this.$store.state.userID == this.postData.writerID">
                <span class="myPost"> [내가 쓴 글] </span>
              </div>
            </div>
            <!-- 게시글 작성자일 경우에만 보여줌 -->
            <div
              v-if="this.$store.state.userID == this.postData.writerID"
              class="post-card__btns"
            >
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
              <div>
                <span>ID: {{ data.userID }}</span>
                <button @click="deleteComment(index)" class="btn_del-comment">
                  삭제
                </button>
              </div>
            </div>
            <button
              type="button"
              class="btn-like"
              :disabled="!this.likeAble"
              @click="likePost"
            >
              좋아요&nbsp;{{ this.postData.likeNum }}&nbsp;
              <i
                :class="['fa-heart', this.likeAble == false ? 'fas' : 'far']"
              ></i>
            </button>
            <button
              type="button"
              class="btn-report"
              :disabled="!this.reportAble"
              @click="reportPost"
            >
              신고하기&nbsp;{{ postData.reportCount }}&nbsp;
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
import { createFollow, deleteFollow, getFollowee } from "@/api/follow";
import { fetchIfUserLiked, createLike } from "@/api/like";
import { fetchReport, createReport } from "@/api/report";
import axios from "axios";

export default {
  async created() {
    await this.fetchPost();
    await this.getImg();
    await this.fetchComments();
    await this.fetchFollowee();
    await this.checkFollow();
    await this.fetchIfUserLiked();
    await this.fetchReport();
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
      postData: [
        {
          likeNum: 0,
          reportCount: 0,
        },
      ],
      postId: this.$route.params.id,
      follow: false,
      username: "닉네임",
      writerID: "",
      followeeList: [],
      likeValue: 0,
      reportValue: 0,
      // 좋아요가 가능한지
      likeAble: false,
      reportAble: false,
      img: "",
    };
  },
  computed: {},
  methods: {
    async checkFollow() {
      try {
        const writer = await this.writerID;
        const followCheck = this.followeeList.some(function findFollowee(
          element
        ) {
          if (element.followeeID == writer) {
            return true;
          } else {
            return false;
          }
        });
        this.follow = followCheck;
        console.log("내가 이미 글쓴이를 팔로우 중인지", followCheck);
      } catch (error) {
        console.log(error);
      }
    },
    // 게시글 상세 조회
    async fetchPost() {
      try {
        const { data } = await fetchPost(this.postId);
        console.log(data);
        this.postData = data;
        this.writerID = data.writerID;
      } catch (error) {
        console.log(error);
      }
    },
    // 사용자가 해당 게시글 좋아요 눌렀는지 카운트 값 리턴(눌렀으면 1)
    async fetchIfUserLiked() {
      try {
        const { data } = await fetchIfUserLiked(
          this.postId,
          this.$store.state.userID
        );
        console.log("좋아요 여부", data[0]["count(*)"]);
        // this.likeAble = data[0]["count(*)"];
        if (data[0]["count(*)"] == 0) {
          this.likeAble = true;
        } else {
          this.likeAble = false;
        }
        // this.likedValue = data[0]["count(*)"];
        // console.log("좋아요 값 반환", this.likedValue);
      } catch (error) {
        console.log(error);
      }
    },
    // 게시글 좋아요
    async likePost() {
      // this.likeValue = 1;
      this.postData.likeNum += 1;
      // console.log("좋아요");
      try {
        if (this.likeAble == true) {
          // this.liked = !this.liked;
          const { data } = await createLike(
            this.postId,
            this.$store.state.userID
          );
          this.likeAble = false;

          console.log("좋아요 누름", data);
          // this.postData.likedValue += 1;

          // this.postData.likeNum -= 1;
        } else {
          return this.postId;
          // this.postData.likeNum += 1;
          // console.log("좋아요 취소");
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.fetchPost();
      }
    },
    // 사용자가 해당 게시글 신고 눌렀는지 카운트 값 리턴(눌렀으면 1)
    async fetchReport() {
      try {
        const { data } = await fetchReport(
          this.postId,
          this.$store.state.userID
        );
        // this.reportAble = data[0]["count(*)"];
        if (data[0]["count(*)"] == 0) {
          this.reportAble = true;
        } else {
          this.reportAble = false;
        }
        console.log("신고 값 반환", this.reportAble);
      } catch (error) {
        console.log(error);
      }
    },
    // 게시글 신고
    async reportPost() {
      this.postData.reportCount += 1;

      try {
        if (this.reportValue == 0) {
          const { data } = await createReport(
            this.postId,
            this.$store.state.userID
          );
          console.log("신고 누름", data);
          // this.postData.reportCount = this.postData.reportCount + 1;
          this.reportAble = false;
        } else {
          return this.postId;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.fetchReport();
      }
    },
    // 나의 팔로위 목록 조회 -> 글 작성자를 이미 팔로우 중이면 true값 반환하여야 함
    async fetchFollowee() {
      try {
        const { data } = await getFollowee(this.$store.state.userID);
        this.followeeList = data;
        // this.followeeList = this.followeeList.map((a) => a.followeeID);
        console.log("나의 팔로위 목록 배열로 조회", this.followeeList);
      } catch (error) {
        console.log(error);
      }
    },
    // 팔로우
    async followUser() {
      try {
        const fwee = this.postData.writerID;
        const fwer = this.$store.state.userID;
        if (this.follow == false) {
          const { data } = await createFollow(fwer, fwee);
          this.follow = true;
          console.log("팔로우", data);
          alert("작성자를 팔로우하였습니다.");
        } else {
          await deleteFollow(fwer, fwee);
          this.follow = false;
          console.log("팔로우 취소");
          alert("작성자를 언팔로우하였습니다.");
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 게시글 삭제
    async deletePost() {
      const result = confirm("정말 삭제하시겠습니까?");
      if (result == true) {
        try {
          const { data } = await deletePost(this.postId);
          console.log(data);
          this.$router.push("category");
        } catch (error) {
          console.log(error);
        }
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
      if (this.comments[index].userID == this.$store.state.userID) {
        const result = confirm("정말 삭제하시겠습니까?");
        if (result == true) {
          try {
            const { data } = await deleteComment(
              this.comments[index].commentNum
            );
            console.log(data);
            this.fetchComments();
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("삭제 취소");
        }
      } else {
        return alert("본인이 작성한 댓글만 삭제할 수 있습니다");
      }
    },
    async getImg() {
      const postID = parseInt(this.postId);
      axios
        .get(`${process.env.VUE_APP_API_URL}post/image/${postID}`)
        .then((res) => {
          // headers: {…} 로 들어감.ß
          const imgUrl = res.data[0].file_src;
          this.img = imgUrl;
          console.log("이미지 조회", res.data[0].file_src);
        });
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
  height: auto;
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
  margin: 10px 10px 10px 0;
  padding: 3px 10px;
}

.btn-report {
  border-style: none;
  border-radius: 5px;
  background-color: rgb(228, 61, 61);
  margin: 10px 10px 10px 0;
  padding: 3px 10px;
  color: white;
}

.btn_del-comment {
  border-style: none;
  border-radius: 5px;
  border: 1px solid rgb(180, 179, 179);
  background-color: transparent;
  margin: 0 0 0 10px;
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

.post-card__btns {
  margin: 10px;
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

button:disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}

.btn-report:disabled {
  background: rgba(194, 52, 81, 0.679);
}

.myPost {
  color: rgb(255, 79, 79);
}
</style>
