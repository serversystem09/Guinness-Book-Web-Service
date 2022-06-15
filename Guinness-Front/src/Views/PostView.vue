<template>
  <div class="post-view">
    <PostItem></PostItem>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: { PostItem },
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
