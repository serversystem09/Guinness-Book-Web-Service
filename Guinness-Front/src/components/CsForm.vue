<template>
  <div class="csboard">
    <form>
      <h1>문의게시판</h1>
      <div class="typo--col">
        <label class="left">제목</label>
        <textarea
          size="40"
          name="subject"
          id="subject"
          style="height: 30pt"
          class="form-control"
        ></textarea>
      </div>
      <div class="typo--col" style="margin-bottom: 10px">
        <label class="left">글쓰기</label>
        <textarea
          size="1000"
          name="body"
          id="body"
          class="form-control"
          rows="10"
        ></textarea>
      </div>
      <div class="typo--col">
        <label class="left">첨부파일</label>
        <label
          ><input type="file" name="attachment" id="FileOpenInput"
        /></label>
      </div>

      <div id="submit">
        <input
          class="w-100 btn btn-lg btn-primary"
          type="submit"
          value="글쓰기"
          onclick="return Validate()"
        /><br />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.csboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 210px 0%;
}

form {
  width: 700px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: 600;
  font-size: 20px;
}

.typo {
  display: flex;
  flex-direction: row;

  justify-content: left;
}

.typo--col {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap: 10px;
}
</style>
