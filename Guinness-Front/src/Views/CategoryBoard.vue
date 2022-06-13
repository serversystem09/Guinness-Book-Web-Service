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
    // postByCate(data, cnt) {
    //   this.data = data;
    //   this.category = data.categoryName;
    //   this.cateNum = data.categoryNum;
    //   // console.log(data.categoryNum);
    // },
    // 클릭한 카테고리 num 전송
    // async fetchCateByNum(cateNum) {
    //   try {
    //     const { data } = await fetchCateByNum(cateNum);
    //     console.log(data);
    //     this.cateNum = data.categoryNum;
    //     this.category = data.categoryName;
    //     this.data = data;
    //     const { postData } = await fetchPostByCat(this.cateNum);
    //     this.postItems = postData;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // 카테고리 데이터 조회
    async fetchCategory() {
      try {
        const { data } = await fetchCategory();
        this.category = data;
        console.log(this.category);
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
