<template>
  <div class="mypage">
    <header><h1>마이 페이지</h1></header>
    <MypageInfo></MypageInfo>
    <MypageBoard></MypageBoard>
  </div>
</template>

<script>
import MypageInfo from "@/components/MypageInfo.vue";
import MypageBoard from "@/components/MypageBoard.vue";
export default { components: { MypageInfo, MypageBoard } };
</script>

<style>
.mypage {
  width: 100%;
  box-sizing: border-box;
  padding: 210px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  z-index: 1;
}
</style>
