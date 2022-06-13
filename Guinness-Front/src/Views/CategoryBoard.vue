<template>
  <div class="category-board">
    <div class="categoryNav">
      <aside>
        <ul>
          <li
            v-for="(i, index) in category"
            :key="index"
            class="category"
            @click="fetchPostByCat(i.categoryNum)"
          >
            {{ i.categoryName }}&nbsp;&nbsp;<i class="fas fa-angle-right"></i>
          </li>
        </ul>
      </aside>
    </div>
    <div class="post-list__wrapper">
      <h3>
        {{ this.data.data.categoryName }} <i class="fas fa-angle-right"></i>
      </h3>
      <div class="post-card__wrapper">
        <PostList
          v-for="(postItem, index) in postItems"
          :postItem="postItem"
          :key="index"
          @fetchPostByCat="fetchPostByCat"
        ></PostList>
      </div>
    </div>
  </div>
</template>

<script>
// import CategoryNav from "../components/CategoryNav.vue";
import { fetchPostByCat } from "@/api/posts";
import PostList from "@/components/PostList.vue";
import { fetchCategory, fetchCateByNum } from "@/api/category";

// import axios from "axios";
export default {
  components: { PostList },
  data() {
    return {
      // category: "운동",
      postItems: [],
      data: [],
      cateNum: 1,
      cnt: 0,
      category: [],
    };
  },
  created() {
    this.fetchCategory();
    this.fetchPostByCat(this.cateNum);
  },
  methods: {
    async fetchCategory() {
      try {
        const { data } = await fetchCategory();
        this.category = data;
        console.log("카테고리", this.category);
      } catch (error) {
        console.log(error.message);
      }
    },
    async fetchPostByCat(cateNum) {
      try {
        const { data } = await fetchPostByCat(cateNum);
        this.postItems = data;
        console.log("게시글", this.postItems);
        const postItem = this.postItems;
        this.data = await fetchCateByNum(cateNum);

        this.$emit("fetchPostByCat", postItem);
      } catch (error) {
        console.log(error);
      }
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
  height: 100%;
}

.post-card__wrapper {
  width: 100%;
}

.post-list__wrapper {
  position: fixed;
  top: 0px;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 180px 50px 150px 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 0;
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
  width: 100%;
}

.categoryNav {
  box-sizing: border-box;
  padding: 150px 10px 0 10px;
  position: relative;
  top: 0px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  height: 100vh;
  z-index: 80;
}

ul {
  list-style: none;
  line-height: 58px;
  padding: 0;
}

.category {
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 10px;
}

.subCategory {
  font-weight: 400;
  text-indent: 15px;
  font-size: 16px;
}
</style>
