<template>
  <div class="hot-category">
    <header><h1>인기 종목 순위</h1></header>
    <div class="wrapper">
      <table class="ranktable">
        <!--회원 수를 고려하여 tr의 개수 동적으로 생성-->
        <tr>
          <th>순위</th>
          <th>종목</th>
          <th>참가자 수</th>
        </tr>

        <tr v-for="(hotList, index) in hotLists" :key="index">
          <th>{{ index + 1 }}위</th>
          <td>{{ hotList.categoryName }}</td>
          <td>{{ hotList.userAmount }} 명</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { fetchHotCateRank } from "@/api/rank";
export default {
  created() {
    this.fetchHotCateRank();
  },
  data() {
    return {
      hotLists: [],
    };
  },
  methods: {
    async fetchHotCateRank() {
      const { data } = await fetchHotCateRank();
      this.hotLists = data;
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
  width: auto;
}

table.ranktable th {
  width: 350px;
  padding: 30px 70px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
  text-align: center;
  font-size: 24px;
}

table.ranktable td {
  width: 350px;
  padding: 30px 70px;
  font-weight: normal;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
  text-align: center;
  font-size: 24px;
}
</style>
