<template>
  <div>
    <h2>문의 내역</h2>
    <div class="wrapper">
      <table class="ranktable">
        <!--회원 수를 고려하여 tr의 개수 동적으로 생성-->
        <tr v-for="categoryList in categoryLists" :key="categoryList.title">
          <th>{{ categoryList.rank }}위</th>
          <td>{{ categoryList.category }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  display: flex;
  border-radius: 5px;
  height: auto;
  background: transparent;
  justify-content: center;
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
  width: 170px;
  padding: 30px 70px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
}

table.ranktable td {
  width: 350px;
  padding: 30px;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
  text-align: center;
}
</style>
