import { instance } from "./index";

// 사용자의 신고 유무 리턴 기능
function fetchReport(postNum, userID) {
  return instance.get(`/report/check/${postNum}/${userID}`);
}

// 사용자의 신고 유무 리턴 기능
function createReport(postNum, userID) {
  return instance.post(`/report/report/${postNum}/${userID}`);
}

export { fetchReport, createReport };
