<template>
  <div>
    <div class="post-card__wrapper">
      <div v-for="card in cards" :key="card" class="post-card">
        <div class="post-card__img">이미지 자리</div>
        <div class="post-card__contents">
          <h2 class="text__title" @click="toDetail">{{ title }}</h2>
          <div class="text__contents">{{ contents }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "제목",
      contents: "내용내용",
      cards: 5,
    };
  },
  methods: {
    toDetail() {
      this.$router.push("/postview");
    },
  },
};
</script>

<style scoped>
.post-card__wrapper {
  width: 100%;
}

.post-card {
  width: 100%;
  display: flex;
  gap: 30px;
  padding: 15px 0;
  border-bottom: 1px solid rgb(226, 225, 225);
}

.post-card__img {
  width: 200px;
  height: 200px;
  background-color: #f9f9f9;
  border: 1px solid rgb(226, 225, 225);
  border-radius: 5px;
}

.post-card__contents {
  width: 500px;
  height: 200px;
  box-sizing: 10px;
  padding: 20px;
}

h2 {
  line-height: 50px;
  border-bottom: 1px solid rgb(226, 225, 225);
  cursor: pointer;
}
</style>
