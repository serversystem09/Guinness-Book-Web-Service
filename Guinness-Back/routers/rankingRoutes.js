// import express
import express from "express";

// import function from controller
import { showRanks } from "../controllers/rankingController.js";

// init express router
const RankRouter = express.Router();

//router define
//1. 좋아요 기준 -> 게시글 3개 추출(hot 게시글) => 사진, 좋아요, 사용자명 카드로
//3. 좋아요 기준 -> 게시글 4개 추출 (총 기네스 순위) => 순위, 이름, 소분류
RankRouter.get('/', showRanks);
//2. event or category 참여자 수 기준 -> 게시글 4개 추출(인기 종목 순위) => 순위, 이벤트명
//RankRouter.get('/ranking2', showHots);
//RankRouter.get('/ranking3', showHotCategory);


// export default router
export default RankRouter;

