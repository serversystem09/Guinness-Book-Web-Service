// import express
import express from "express";

// import function from controller
import { showRanks } from "../controllers/rankingController";

// init express router
const RankRouter = express.Router();

RankRouter.get("/", showRanks);

// export default router
export default RankRouter;
