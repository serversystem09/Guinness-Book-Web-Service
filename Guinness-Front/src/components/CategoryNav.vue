<template>
  <div class="categoryNav">
    <aside>
      <ul>
        <li>체육</li>
        <li>음식</li>
        <li>춤</li>
        <li>노래</li>
        <li>공예</li>
        <li>사회 캠페인</li>
        <li>오락</li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  isActive: [true, false, false, false, false, false, false],
};
</script>

<style>
.categoryNav {
  box-sizing: border-box;
  padding: 50px 10px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  height: 100vh;
}

ul {
  list-style: none;
  line-height: 40px;
  padding: 0;
}
</style>
