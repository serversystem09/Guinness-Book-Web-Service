<template>
  <div class="inquiry">
    <h1>나의 문의 내역</h1>
    <div class="wrapper">
      <table class="ranktable">
        <!--회원 수를 고려하여 tr의 개수 동적으로 생성-->
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
          <th>작성일</th>
        </tr>
        <tr v-for="(inquiryList, index) in inquiryLists" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ inquiryList.csTitle }}</td>
          <td>{{ inquiryList.content }}</td>
          <td>{{ inquiryList.writeDate }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { fetchInquiry } from "@/api/csBoard";
export default {
  data() {
    return {
      inquiryLists: [],
    };
  },
  created() {
    this.fetchInquiry();
  },
  methods: {
    async fetchInquiry() {
      try {
        const { data } = await fetchInquiry(this.$store.state.userID);
        this.inquiryLists = data;
        console.log(this.inquiryLists);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.inquiry {
  padding: 210px;
}
h1 {
  text-align: center;
}

.wrapper {
  display: flex;
  border-radius: 5px;
  height: auto;
  background: transparent;
  justify-content: center;
  width: 100%;
}

table.ranktable {
  border-collapse: separate;
  border-spacing: 1px;
  margin: 100px 0px;
  border-top: 3px solid #ccc;
  line-height: 1.5;
  text-align: center;
  font-size: 22px;
  width: 910%;
}

table.ranktable th {
  width: auto;
  padding: 30px 70px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
  font-size: 24px;
}

table.ranktable td {
  width: auto;
  padding: 30px 70px;
  font-weight: normal;
  vertical-align: top;
  border-bottom: 3px solid #ccc;
}
</style>
