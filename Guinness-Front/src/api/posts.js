// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { instance } from "./index";

// 게시글 목록 조회
function fetchPosts() {
  return instance.get("post/posts");
}

// 특정 게시글을 조회하는 API
function fetchPost(postData) {
  const params = { id: postData };
  return instance.get("post/posts/:id", { params });
}

// 게시글 생성
function createPost(postData) {
  return instance.post("post/posts", postData);
}

// 게시글 삭제
function deletePost(postData) {
  return instance.delete("post/posts/:id", postData);
}

// 게시글 수정
function editPost(postNum, postData) {
  return instance.put("post/posts/:id", postNum, postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
