import { instance } from "./index";

// 사용자가 좋아요 누른 게시글을 보여줌(마이 페이지)
function fetchLikedPost(userID) {
  return instance.get(`like/likedPosts/${userID}`);
}

// 사용자가 좋아요를 눌렀는지 카운트 값 리턴(눌렀으면 1)
function fetchIfUserLiked(postNum, userID) {
  return instance.get(`like/liked/${postNum}/${userID}`);
}

// 사용자가 좋아요 누르지 않은 게시글에 한해 좋아요 기능
function createLike(postNum, userID) {
  return instance.post(`like/like/${postNum}/${userID}`);
}

export { fetchLikedPost, fetchIfUserLiked, createLike };
