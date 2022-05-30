<template>
  <div class="categoryNav">
    <aside>
      <ul>
        <li
          v-for="(i, index) in category"
          :key="index"
          class="category"
          @click="showSubcategory(index)"
        >
          {{ category[index].title }} <i class="fa fa-angle-down"></i>
          <ul class="subCategory" v-if="isActive[index] == true">
            <li v-for="(j, index) in category[0].subCategory" :key="j.id">
              {{ category[0].subCategory[index] }}
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: [false, false, false, false, false, false, false],
      category: [
        {
          title: "체육",
          subCategory: ["수영", "필라테스"],
        },
        {
          title: "음식",
          subCategory: ["수영", "필라테스"],
        },
        {
          title: "춤",
          subCategory: ["수영", "필라테스"],
        },
        {
          title: "노래",
          subCategory: ["수영", "필라테스"],
        },
        {
          title: "공예",
          subCategory: ["수영", "필라테스"],
        },
        {
          title: "사회 캠페인",
          subCategory: ["수영", "필라테스"],
        },
        {
          title: "오락",
          subCategory: ["수영", "필라테스"],
        },
      ],
    };
  },
  methods: {
    showSubcategory(index) {
      const i = index;
      console.log(i);
      this.isActive[i] = !this.isActive[i];
      console.log(this.isActive[i]);
      const category = this.category[i].title;
      this.$emit("submitCategory", category);
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
  /* height: 100vh; */
}

ul {
  list-style: none;
  line-height: 40px;
  padding: 0;
}

.category {
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;
}

.subCategory {
  font-weight: 400;
  text-indent: 15px;
  font-size: 16px;
}
</style>
