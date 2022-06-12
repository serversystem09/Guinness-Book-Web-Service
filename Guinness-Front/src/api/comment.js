import { instance } from "./index";

// 댓글 생성
function createComment(postData) {
  return instance.post("comm/comment", postData);
}

// 댓글 조회
function fetchComments(postNum) {
  return instance.get(`comm/comments/${postNum}`);
}

// 댓글 개별 조회
function fetchComment(postNum) {
  return instance.get(`comm/comment/${postNum}`);
}

// 댓글 개별 삭제
function deleteComment(postNum) {
  return instance.delete(`comm/comment${postNum}`);
}

export { createComment, fetchComment, fetchComments, deleteComment };
