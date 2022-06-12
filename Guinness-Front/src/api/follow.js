import { instance } from "./index";

// 팔로우 생성
function createFollow() {
  return instance.post("foll/create");
}

// 팔로우 취소
function deleteFollow(fwer, fwee) {
  return instance.delete(`foll/delete/${fwer}/${fwee}`);
}

export { createFollow, deleteFollow };
