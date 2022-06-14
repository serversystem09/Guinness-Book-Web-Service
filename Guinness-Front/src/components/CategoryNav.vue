<template>
  <div class="categoryNav">
    <aside>
      <ul>
        <li
          v-for="(i, index) in category"
          :key="index"
          class="category"
          @click="fetchCateByNum(i.categoryNum)"
        >
          {{ i.categoryName }}&nbsp;&nbsp;<i class="fas fa-angle-right"></i>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { fetchCategory, fetchCateByNum } from "@/api/category";

export default {
  created() {
    this.fetchCategory();
  },
  data: function () {
    return {
      isActive: [true, true, true, true, true, true, true],
      category: [],
    };
  },
  methods: {
    // 클릭한 카테고리 num 전송
    async fetchCateByNum(cateNum) {
      try {
        const { data } = await fetchCateByNum(cateNum);
        const cnt = 1;
        this.$emit("postByCate", data, cnt);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
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
  },
};
</script>

<style>
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
