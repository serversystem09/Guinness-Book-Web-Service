// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { instance } from "./index";

// 게시글 생성
function createInquiry(postNum) {
  return instance.post("cs/create", postNum);
}

export { createInquiry };
