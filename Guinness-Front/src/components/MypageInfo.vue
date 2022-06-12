<template>
  <div>
    <div class="mypage__wrapper">
      <div>
        <span class="mypage__nickname">{{ nickname }} 님 환영합니다.</span>
        <span class="mypage__rank">&nbsp;&nbsp;&nbsp;[순위: {{ rank }}등]</span>
      </div>
      <div>
        <span class="mypage__membership">{{ membership }} 등급</span
        >&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>{{ name }}</span
        ><span class="mypage__email"
          >&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{ email }}</span
        >
      </div>
      <button @click="toChangeInfo" class="mypage__btn">개인정보 수정</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: "닉네임",
      rank: 1,
      membership: "gold",
      name: "서민영",
      email: "seo1234@naver.com",
    };
  },
  methods: {
    toChangeInfo() {
      this.$router.push("/changeinfo");
    },
  },
};
</script>

<style>
.mypage__wrapper {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 50px;
  width: 1200px;
  height: 300px;
  line-height: 30px;
  gap: 30px;
  justify-content: center;
}

.mypage__nickname {
  font-size: 30px;
  font-weight: 200;
}

.mypage__rank {
  font-size: 28px;
  font-weight: 200;
  color: rgb(255, 210, 98);
}

.mypage__btn {
  width: 200px;
  background-color: rgb(255, 210, 98);
  border-style: none;
  padding: 10px 0;
  border-radius: 5px;
}

span {
  font-size: 20px;
}
</style>
