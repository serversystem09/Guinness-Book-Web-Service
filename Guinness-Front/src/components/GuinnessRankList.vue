<template>
  <div class="hot-category">
    <header><h1>총 기네스 순위</h1></header>
    <div class="wrapper">
      <table class="ranktable">
        <!--회원 수를 고려하여 tr의 개수 동적으로 생성-->
        <tr v-for="categoryList in categoryLists" :key="categoryList.title">
          <th>{{ categoryList.rank }}위</th>
          <td>{{ categoryList.username }} 님</td>
          <td>{{ categoryList.content }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryLists: [
        {
          rank: 1,
          username: "서민영",
          content: "애국가 타자 빨리치기",
        },
        {
          rank: 2,
          username: "서민영",
          content: "애국가 타자 빨리치기",
        },
        {
          rank: 3,
          username: "서민영",
          content: "애국가 타자 빨리치기",
        },
        {
          rank: 4,
          username: "서민영",
          content: "애국가 타자 빨리치기",
        },
      ],
    };
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
}

table.ranktable th {
  width: 120px;
  padding: 30px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
}

table.ranktable td {
  width: 350px;
  padding: 30px;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
}
</style>
