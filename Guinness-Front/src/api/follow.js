import { instance } from "./index";

// 팔로우 생성
function createFollow(fwer, fwee) {
  return instance.post(`foll/create/${fwer}/${fwee}`);
}

// 팔로우 취소
function deleteFollow(fwer, fwee) {
  return instance.delete(`foll/delete/${fwer}/${fwee}`);
}

// 팔로우 전체 조회
function getFollow() {
  return instance.get("foll/follows");
}

// 팔로워 아이디 조회
function getFollower(followerID) {
  return instance.get(`foll/followers/${followerID}`);
}

// 팔로위 아이디 조회
function getFollowee(followeeID) {
  return instance.get(`foll/followees/${followeeID}`);
}

export { createFollow, deleteFollow, getFollow, getFollower, getFollowee };
