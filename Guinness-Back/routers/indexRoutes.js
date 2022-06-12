// import express
import express from "express";

// import function from controller
import { showHots, showHotCategory } from "../controllers/indexController.js";

// init express router
const indexRouter = express.Router();

//2. event or category 참여자 수 기준 -> 게시글 4개 추출(인기 종목 순위) => 순위, 이벤트명
indexRouter.get('/1', showHots);
indexRouter.get('/2', showHotCategory);

// export default router
export default indexRouter;