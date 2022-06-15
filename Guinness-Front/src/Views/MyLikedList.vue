<template>
  <div class="inquiry">
    <h1>좋아요 한 게시글</h1>
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
          <th>작성자 ID</th>
        </tr>
        <tr v-for="(likedList, index) in likedLists" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ likedList.eventName }}</td>
          <td>{{ likedList.postTitle }}</td>
          <td>{{ likedList.content }}</td>
          <td>{{ likedList.likeNum }}</td>
          <td>{{ likedList.reportCount }}</td>
          <td>{{ likedList.writeDate }}</td>
          <td>{{ likedList.writerID }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { fetchLikedPost } from "@/api/like";
export default {
  data() {
    return {
      likedLists: [],
    };
  },
  created() {
    this.fetchMylike();
  },
  methods: {
    async fetchMylike() {
      try {
        const { data } = await fetchLikedPost(this.$store.state.userID);
        this.likedLists = data;
        console.log(this.likedLists);
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
