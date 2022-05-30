<template>
  <div class="post-view">
    <PostList></PostList>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
export default {
  components: { PostList },
};
</script>

<style>
.post-view {
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
