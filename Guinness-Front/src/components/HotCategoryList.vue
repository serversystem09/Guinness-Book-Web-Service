<template>
  <div class="hot-category">
    <header><h1>인기 종목 순위</h1></header>
    <div class="wrapper">
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 인기 종목 순위 */
header h1 {
  margin-bottom: 50px;
}
.wrapper {
  display: flex;
  border-radius: 5px;
  height: auto;
  background: transparent;
}
</style>
