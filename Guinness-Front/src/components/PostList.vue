<!-- 게시글 목록 -->
<template>
  <div>
    <div class="post-card">
      <div class="post-card__img">이미지 자리</div>
      <div class="post-card__contents">
        <h3 class="text__title cursor" @click="toDetail">
          [{{ postItem.eventName }}]&nbsp;{{ postItem.postTitle }}
        </h3>
        <h5 class="text__title">
          &nbsp;<i class="fa-heart fas"></i>&nbsp;{{ postItem.likeNum }}
        </h5>
        <div class="text__contents">
          {{ postItem.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async toDetail() {
      try {
        const id = this.postItem.postNum;
        console.log("해당 게시글 아이디", id);
        this.$router.push(`postview/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
    // async fetchData() {
    //   try {
    //     const { postData } = await fetchPosts();
    //     // this.postItems = postData;
    //     console.log(postData);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // },
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

.cursor {
  cursor: pointer;
}

h2 {
  line-height: 50px;
  border-bottom: 1px solid rgb(226, 225, 225);
  cursor: pointer;
}
</style>
