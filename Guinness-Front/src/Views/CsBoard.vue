<template>
  <div class="csboard">
    <body data-new-gr-c-s-check-loaded="14.1016.0" data-gr-ext-installed="">
      <main class="form-signin w-100 m-auto">
        <form style="margin-top: 3%; width: 70%; position: absolute; left: 10%">
          <h1 class="h3 mb-3 fw-normal" style="text-align: center">
            문의게시판
          </h1>
          <div id="content">
            <div class="typo">
              <div>
                <block class="left">제목</block>
                <textarea
                  size="40"
                  name="subject"
                  id="subject"
                  style="width: 200pt; height: 30pt; margin-left: 50px"
                ></textarea>
              </div>
              <div style="margin-bottom: 10px">
                <block class="left">글쓰기</block>
                <textarea
                  size="1000"
                  name="body"
                  id="body"
                  style="width: 800pt; height: 200pt; margin-right: 50px"
                ></textarea>
              </div>
              <div>
                <block class="left">첨부파일</block>
                <block
                  ><input type="file" name="attachment" id="FileOpenInput"
                /></block>
              </div>
            </div>

            <div id="submit">
              <input
                class="w-100 btn btn-lg btn-primary"
                type="submit"
                value="글쓰기"
                onclick="return Validate()"
              /><br />
            </div>
          </div>
        </form>
      </main>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.csboard {
  padding-top: 150px;
}
</style>
