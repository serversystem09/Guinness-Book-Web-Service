<template>
  <div class="category-board">
    <category-nav
      @submitCategory="submitCategory"
      :category="category"
      :subcategory="subcategory"
    ></category-nav>

    <div class="post-list__wrapper">
      <h3>
        {{ this.category }} <i class="fas fa-angle-right"></i>
        {{ this.subcategory }}
      </h3>
      <PostList></PostList>
    </div>
  </div>
</template>

<script>
import CategoryNav from "../components/CategoryNav.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: { CategoryNav, PostList },
  data() {
    return {
      category: "체육",
      subcategory: "수영",
    };
  },
  methods: {
    submitCategory(category, subcategory) {
      this.category = category;
      this.subcategory = subcategory;
    },
  },
};
</script>

<style>
.category-board {
  display: flex;
  width: 100%;
  /* box-sizing: border-box;
  padding: 90px 0; */
  background-color: #f9f9f9;
}

.post-list__wrapper {
  position: fixed;
  top: 0px;
  left: 330px;
  /* width: 100%; */
  box-sizing: border-box;
  padding: 150px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  background-color: #f9f9f9;
}

.post-list__wrapper > .category-title {
  display: flex;
  flex-direction: row;
}
.post-list__wrapper > .category-title > h3 {
  width: auto !important;
}

h3 {
  margin-bottom: 20px;
  text-align: left;
  width: 700px;
}
</style>
