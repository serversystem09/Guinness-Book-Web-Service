<template>
  <div class="mainpage">
    <HotPostList></HotPostList>
    <HotCategoryList></HotCategoryList>
  </div>
</template>

<script>
import HotPostList from "@/components/HotPostList.vue";
import HotCategoryList from "@/components/HotCategoryList.vue";
export default {
  components: { HotCategoryList, HotPostList },
};
</script>

<style>
@import "@/assets/css/common.css";
.mainpage {
  width: 100%;
  box-sizing: border-box;
  padding: 210px 10%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  z-index: 1;
}
</style>
