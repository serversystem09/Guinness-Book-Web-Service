import { instance } from "./index";

// 게시글 목록 조회
function fetchPosts() {
  return instance.get("post/posts");
}

// 특정 게시글을 조회하는 API
function fetchPost(postData) {
  return instance.get(`post/posts/${postData}`);
}

// 게시글 생성
function createPost(postData) {
  return instance.post("post/posts", postData);
}

// 게시글 삭제
function deletePost(postNum) {
  return instance.delete(`post/posts/${postNum}`);
}

// 게시글 수정
function editPost(postNum, postData) {
  return instance.put(`post/posts/${postNum}`, postData);
}

// 사진 첨부
function uploadImg() {
  return instance.post("/post/uploadphoto");
}

// 카테고리에 해당하는 게시글 조회
function fetchPostByCat(cateNum) {
  return instance.get(`/post/postsByCat/${cateNum}`);
}

export {
  fetchPosts,
  createPost,
  deletePost,
  fetchPost,
  editPost,
  uploadImg,
  fetchPostByCat,
};
