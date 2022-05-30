<template>
  <div class="ranking">
    <p id="title">인기 종목 순위</p>
    <table class="ranktable">
      <!--회원 수를 고려하여 tr의 개수 동적으로 생성-->
      <tr>
        <th>1위</th>
        <td>서민영 님</td>
        <td>애국가 타자 빨리치기</td>
      </tr>
      <tr>
        <th>2위</th>
        <td>강수진 님</td>
        <td>애국가 타자 빨리치기</td>
      </tr>
      <tr>
        <th>3위</th>
        <td>권도연 님</td>
        <td>애국가 타자 빨리치기</td>
      </tr>
      <tr>
        <th>4위</th>
        <td>오승현 님</td>
        <td>애국가 타자 빨리치기</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ranking {
  padding-top: 120px;
}

#title {
  margin: 100px 70px;
  font-size: 40px;
  font-weight: bold;
  color: rgb(33, 31, 31);
  text-shadow: 1px 1px 1.2px rgb(204, 201, 201);
  background-color: white;
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
