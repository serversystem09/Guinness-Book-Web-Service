<template>
  <div>
    <div class="post-card__wrapper">
      <div class="post-card">
        <div class="post-card__img">이미지 자리</div>
        <div class="post-card__contents">
          <h2 class="text__title">{{ title }}</h2>
          <div class="text__contents">{{ contents }}</div>
          <div class="text__comments">{{ comments }}</div>
          <div>sns</div>
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
      contents: "내용",
      comments: "댓글",
    };
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
}

.post-card__img {
  width: 500px;
  height: 500px;
  background-color: #f9f9f9;
  border: 1px solid rgb(226, 225, 225);
  border-radius: 5px;
}

.post-card__contents {
  width: 500px;
  border: 1px solid rgb(226, 225, 225);
  border-radius: 5px;
  box-sizing: 10px;
  padding: 20px;
}

h2 {
  line-height: 50px;
  border-bottom: 1px solid rgb(226, 225, 225);
}

.text__contents {
  border-bottom: 1px solid rgb(226, 225, 225);
  height: 220px;
}

.text__comments {
  border-bottom: 1px solid rgb(226, 225, 225);
  height: 120px;
}
</style>
