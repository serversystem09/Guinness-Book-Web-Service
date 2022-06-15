<template>
  <div class="hot-category">
    <header><h1>인기 이벤트 순위</h1></header>
    <div class="wrapper">
      <table class="ranktable">
        <!--회원 수를 고려하여 tr의 개수 동적으로 생성-->
        <tr v-for="(data, index) in rankData" :key="data.index">
          <th>{{ index + 1 }}위</th>
          <td>{{ data.postTitle }}</td>
          <td>{{ data.nickName }} 님</td>
          <td>{{ data.eventName }}</td>
          <td>{{ data.likes }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { fetchRank } from "@/api/rank";

export default {
  async created() {
    await this.fetchRank();
  },
  data() {
    return {
      rankData: [],
    };
  },
  methods: {
    async fetchRank() {
      const { data } = await fetchRank();
      this.rankData = data;
      console.log(data);
    },
  },
};
</script>

<style scoped>
/* 인기 종목 순위 */
.hot-category {
  padding-top: 100px;
  box-sizing: border-box;
  padding: 210px 0;
}

header h1 {
  margin-bottom: 50px;
  text-align: center;
}
.wrapper {
  display: flex;
  border-radius: 5px;
  height: auto;
  background: transparent;
  justify-content: center;
}

.ranking {
  padding-top: 120px;
}

table.ranktable {
  border-collapse: separate;
  border-spacing: 1px;
  margin: 100px 70px;
  border-top: 3px solid #ccc;
  line-height: 1.5;
  text-align: left;
  font-size: 20px;
}

table.ranktable th {
  width: 120px;
  padding: 30px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
}

table.ranktable td {
  width: auto;
  padding: 30px;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
}
</style>
