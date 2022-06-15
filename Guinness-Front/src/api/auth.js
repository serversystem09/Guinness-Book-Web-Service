// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from "./index";

// 회원가입 API
function registerUser(userData) {
  return instance.post("auth/register", userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post("auth/login", userData);
}

// 회원정보 조회
function fetchUser(userID) {
  return instance.get(`/user/users/${userID}`);
}

// 회원정보 수정
function updateUser(userID, userData) {
  return instance.put(`/user/users/${userID}`, userData);
}

export { registerUser, loginUser, fetchUser, updateUser };
