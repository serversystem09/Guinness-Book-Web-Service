import { instance } from "./index";

// 팔로우 생성
function createFollow(userData) {
  return instance.post("foll/create", userData);
}

// 팔로우 취소
function deleteFollow(follower, followee) {
  const params = { fwer: follower, fwee: followee };
  return instance.delete("foll/delete/:fwer/:fwee", { params });
}

export { createFollow, deleteFollow };
