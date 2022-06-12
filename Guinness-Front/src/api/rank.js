import { instance } from "./index";

// 인기 이벤트 순위
function fetchRank() {
  return instance.get("rank/");
}

// 인기 게시글 순위
function fetchHotPostRank() {
  return instance.get("/1");
}

// 인기 카테고리 순위
function fetchHotCateRank() {
  return instance.get("/2");
}

export { fetchRank, fetchHotPostRank, fetchHotCateRank };
