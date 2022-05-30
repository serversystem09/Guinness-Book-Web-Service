<template>
  <div class="hot-contents">
    <header><h1>HOT 게시글</h1></header>
    <div class="card__wrapper">
      <div v-for="content in contents" :key="content.id" class="card">
        <div class="card__img">이미지 자리</div>
        <div class="card__content">
          <div class="card__nickname">{{ content.nickname }}</div>
          <div class="card__scrap">
            <i class="icon ion-md-heart" />{{ content.scrap_cnt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        { id: 0, nickname: "도연", scrap_cnt: "29" },
        { id: 1, nickname: "민영", scrap_cnt: "80" },
        { id: 2, nickname: "수진", scrap_cnt: "124" },
      ],
    };
  },
};
</script>

<style>
@import "@/assets/css/common.css";
.mainpage {
  width: 100%;
  box-sizing: border-box;
  padding: 210px 10%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  z-index: 1;
}

header h1 {
  margin-bottom: 50px;
  text-align: center;
}

/* Hot 게시글 */
.card__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
  border-radius: 5px;
  padding: 30px 10px;
}

.card {
  width: 280px;
  height: 320px;
  background-color: white;
  border: 1px solid rgb(203, 203, 203);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 0 15px 0;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  z-index: 3;
}

.card__img {
  background-color: rgb(205, 209, 212);
  width: 100%;
  height: 280px;
  border-radius: 5px 5px 0px 0px;
}
.card__content {
  box-sizing: border-box;
  padding: 15px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

/* 인기 종목 순위 */
.wrapper {
  display: flex;
  background-color: rgb(239, 239, 239);
  border-radius: 5px;
  height: 500px;
}
</style>
