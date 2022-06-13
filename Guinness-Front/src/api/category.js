import { instance } from "./index";

// 카테고리 게시판
function fetchCategory() {
  return instance.get("cat/categories");
}

function fetchCateByNum(cateNum) {
  return instance.get(`cat/categories/${cateNum}`);
}

export { fetchCategory, fetchCateByNum };
