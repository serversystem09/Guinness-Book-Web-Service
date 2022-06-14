<template>
  <div class="mypage__wrapper--row">
    <div>
      <h2>Personal</h2>
      <div class="personal__wrapper">
        <button @click="toMyPost">내가 쓴 게시글</button>
        <button @click="toMyLike">좋아요 한 게시글</button>
        <!-- <button @click="toMyGuinness">기네스 참여<br />현황 보기</button> -->
        <button @click="toMyComment">내가 쓴 댓글</button>
        <button @click="toMyInquiry">내 문의 내역</button>
      </div>
    </div>
    <div>
      <h2>follower & followee</h2>
      <div class="follow__wrapper">
        <div class="btn__wrapper">
          <button
            @click="followingActive"
            class="inActive"
            :class="{ active: isActive1 }"
          >
            follower</button
          >&nbsp;<button
            @click="followerActive"
            class="inActive"
            :class="{ active: isActive2 }"
          >
            followee
          </button>
        </div>
        <div v-if="isActive1" class="following__contents">
          <div v-for="(follower, index) in followerList" :key="index">
            <strong
              ><span>{{ index + 1 }}.</span></strong
            ><span> {{ follower.followerID }}</span
            ><br />
          </div>
        </div>

        <div v-else-if="isActive2" class="followee__contents">
          <div v-for="(followee, index) in followeeList" :key="index">
            <strong
              ><span>{{ index + 1 }}.</span></strong
            >
            <span> {{ followee.followeeID }}</span
            ><br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFollower, getFollowee } from "@/api/follow";
export default {
  data() {
    return {
      isActive1: true,
      isActive2: false,
      following: [],
      followerList: [],
      followeeList: [],
    };
  },
  created() {
    this.fetchFollower();
    this.fetchFollowee();
  },
  methods: {
    toMyPost() {
      this.$router.push("/mypost");
    },
    toMyLike() {
      this.$router.push("/mylike");
    },
    toMyComment() {
      this.$router.push("/mycomment");
    },
    toMyInquiry() {
      this.$router.push("/myinquiry");
    },
    followingActive() {
      this.isActive1 = true;
      this.isActive2 = false;
    },
    followerActive() {
      this.isActive1 = false;
      this.isActive2 = true;
    },
    async fetchFollower() {
      const { data } = await getFollower(this.$store.state.userID);
      console.log("팔로워", data);
      this.followerList = data;
    },
    async fetchFollowee() {
      const { data } = await getFollowee(this.$store.state.userID);
      console.log("팔로위", data);
      this.followeeList = data;
    },
  },
};
</script>

<style>
.mypage__wrapper--row {
  display: flex;
  justify-content: space-between;
  width: 1200px;
}

.personal__wrapper,
.follow__wrapper {
  width: 550px;
  background-color: white;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 50px;
  height: auto;
}

.personal__wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
}

.personal__wrapper > button {
  width: 100%;
  background-color: rgb(255, 210, 98);
  border-style: none;
  padding: 10px 0;
  border-radius: 5px;
}

.following__contents,
.followee__contents {
  display: flex;
  flex-direction: column;
  background-color: rgba(239, 239, 239, 0.701);
  border-radius: 5px;
  height: auto;
  width: 100%;
  margin-top: 15px;
  padding: 20px;
}

.btn__wrapper {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(237, 237, 237);
}

.btn__wrapper > button {
  border-style: none;
  width: 50%;
}

.inActive {
  background-color: transparent;
}

.active {
  background-color: rgb(255, 210, 98);
  color: white;
}
</style>
