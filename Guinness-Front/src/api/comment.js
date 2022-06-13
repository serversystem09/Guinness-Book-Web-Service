import { instance } from "./index";

// 댓글 생성
function createComment(postData) {
  return instance.post("comm/comment", postData);
}

// 댓글 조회
function fetchComments(postNum) {
  return instance.get(`comm/comments/${postNum}`);
}

// 댓글 개별 삭제
function deleteComment(commentNum) {
  return instance.delete(`comm/comment/${commentNum}`);
}

// 내가 쓴 댓글 조회
function fetchComment(userID) {
  return instance.get(`comm/comment/${userID}`);
}

export { createComment, fetchComment, fetchComments, deleteComment };
