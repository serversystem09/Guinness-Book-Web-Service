// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { instance } from "./index";

// 게시글 목록 조회
function fetchPosts() {
  return instance.get("post/posts");
}

// 특정 게시글을 조회하는 API
function fetchPost(postId) {
  return instance.get(postId);
}

// 게시글 생성
function createPost(postData) {
  return instance.post("/addBoard", postData);
}

// 게시글 삭제
function deletePost(postId) {
  return instance.delete(postId);
}

// 게시글 수정
function editPost(postId, postData) {
  return instance.put(postId, postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
