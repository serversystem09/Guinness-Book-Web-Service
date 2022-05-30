<template>
  <div class="category-board">
    <category-nav
      @submitCategory="submitCategory"
      :category="category"
    ></category-nav>

    <div class="post-list__wrapper">
      <h3>{{ this.category }}_</h3>
      <PostComponent></PostComponent>
    </div>
  </div>
</template>

<script>
import CategoryNav from "../components/CategoryNav.vue";
import PostComponent from "@/components/PostComponent.vue";
export default {
  components: { CategoryNav, PostComponent },
  data() {
    return {
      category: "체육",
    };
  },
  methods: {
    submitCategory(category) {
      this.category = category;
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
  position: relative;
  top: 0px;
  width: 100%;
  box-sizing: border-box;
  padding: 150px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  background-color: #f9f9f9;
}

h3 {
  margin-bottom: 20px;
  text-align: left;
  width: 700px;
}
</style>
