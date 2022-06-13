import { instance } from "./index";

// 내가 쓴 댓글 조회
function fetchMyComment(userID) {
  return instance.get(`/mypage/myCommentPost/${userID}`);
}

// 내가 쓴 게시글 조회
function fetchMyPost(userID) {
  return instance.get(`/mypage/myPosts/${userID}`);
}

export { fetchMyComment, fetchMyPost };
