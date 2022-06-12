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
        <!-- {{ this.subcategory }} -->
      </h3>
      <div class="post-card__wrapper">
        <PostList
          v-for="(postItem, index) in postItems"
          :postItem="postItem"
          :key="index"
          @fetchData="fetchData"
        ></PostList>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryNav from "../components/CategoryNav.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
export default {
  components: { CategoryNav, PostList },
  data() {
    return {
      category: "체육",
      subcategory: "수영",
      postItems: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    submitCategory(category, subcategory) {
      this.category = category;
      this.subcategory = subcategory;
    },
    fetchData() {
      axios
        .get(`${process.env.VUE_APP_API_URL}post/posts`)
        .then((res) => {
          console.log("res결과", res.data);
          this.postItems = res.data;
        })
        .catch((err) => console.error(err));
      // console.log(this.postItems);
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

.post-card__wrapper {
  width: 100%;
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
