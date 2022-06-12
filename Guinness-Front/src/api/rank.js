import { instance } from "./index";

// 댓글 생성
function fetchRank() {
  return instance.get("rank/");
}

export { fetchRank };
