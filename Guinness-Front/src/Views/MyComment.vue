<template>
  <div class="inquiry">
    <h1>작성 댓글</h1>
    <div class="wrapper">
      <table class="ranktable">
        <tr>
          <th>번호</th>
          <th>소분류</th>
          <th>해당 게시글</th>

          <th>댓글 내용</th>
          <th>작성일</th>
        </tr>
        <tr v-for="(commentList, index) in commentLists" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ commentList.eventName }}</td>
          <td>{{ commentList.postTitle }}</td>
          <td>{{ commentList.content }}</td>
          <td>{{ commentList.writeDate }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { fetchMyComment } from "@/api/mypage";
export default {
  data() {
    return {
      commentLists: [],
    };
  },
  created() {
    this.fetchMyComment();
  },
  methods: {
    async fetchMyComment() {
      try {
        const { data } = await fetchMyComment(this.$store.state.userID);
        this.commentLists = data;
        console.log(this.commentLists);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.inquiry {
  padding: 210px;
}
h1 {
  text-align: center;
}

.wrapper {
  display: flex;
  border-radius: 5px;
  height: auto;
  background: transparent;
  justify-content: center;
  width: 100%;
}

table.ranktable {
  border-collapse: separate;
  border-spacing: 1px;
  margin: 100px 0px;
  border-top: 3px solid #ccc;
  line-height: 1.5;
  text-align: center;
  font-size: 22px;
  width: 90%;
}

table.ranktable th {
  width: auto;
  padding: 30px 70px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
  font-size: 24px;
}

table.ranktable td {
  width: auto;
  padding: 30px 70px;
  font-weight: normal;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
}
</style>
