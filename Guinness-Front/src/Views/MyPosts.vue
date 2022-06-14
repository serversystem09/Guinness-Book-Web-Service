<template>
  <div class="inquiry">
    <h1>내가 쓴 게시글</h1>
    <div class="wrapper">
      <table class="ranktable">
        <tr>
          <th>번호</th>
          <th>소분류</th>
          <th>제목</th>
          <th>내용</th>
          <th>좋아요 수</th>
          <th>신고 수</th>
          <th>작성일</th>
        </tr>
        <tr v-for="(postList, index) in postLists" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ postList.eventName }}</td>
          <td>{{ postList.postTitle }}</td>
          <td>{{ postList.content }}</td>
          <td>{{ postList.likeNum }}</td>
          <td>{{ postList.reportCount }}</td>
          <td>{{ postList.writeDate }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { fetchMyPost } from "@/api/mypage";
export default {
  data() {
    return {
      postLists: [],
    };
  },
  created() {
    this.fetchMyPost();
  },
  methods: {
    async fetchMyPost() {
      try {
        const { data } = await fetchMyPost(this.$store.state.userID);
        this.postLists = data;
        console.log(this.postLists);
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
  width: 100%;
}

table.ranktable th {
  width: auto;
  padding: 30px 20px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
  font-size: 22px;
}

table.ranktable td {
  width: auto;
  padding: 30px 20px;
  font-weight: normal;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
}
</style>
