import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

// 파일 전송
function createFileInstance(url) {
  const instance = axios.create({
    baseURL: `/v1/${url}`,
    // 이걸 써줘야 formdata 형식 전송가능
    haeders: { "Content-Type": "multipart/form-data" },
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
// export const posts = createInstance();
export const files = createFileInstance("addBoard");
export const posts = createInstanceWithAuth("posts");

// 문의하기 폼 제출
function createInquiry(inquiryData) {
  return instance.post(inquiryData);
}
// 게시글 이미지 제출 폼
function uploadImage(image) {
  return files.post(image);
}
function createPost(postData) {
  return instance.post("addBoard", postData);
}

// 카테고리 게시판
function fetchCategory() {
  return instance.get("category");
}
export { createInquiry, uploadImage, createPost, fetchCategory };

// CREATE - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}
