<template>
  <div class="category-board">
    <category-nav></category-nav>
    <div class="post-list__wrapper"><PostList></PostList></div>
  </div>
</template>

<script>
import CategoryNav from "../components/CategoryNav.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: { CategoryNav, PostList },
};
</script>

<style>
.category-board {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 90px 0;
  background-color: #f9f9f9;
}

.post-list__wrapper {
  width: 100%;
  box-sizing: border-box;
  padding: 120px 0;
  display: flex;
  justify-content: center;
}
</style>
