import { instance } from "./index";

// 게시글 생성
function createInquiry(postNum) {
  return instance.post("cs/create", postNum);
}

// 문의내역 조회
function fetchInquiry(userID) {
  return instance.get(`cs/myCSs/${userID}`);
}

export { createInquiry, fetchInquiry };
