// import express
import express from "express";

// import function from controller
import { showHots, showHotCategory} from "../controllers/indexController.js";

const indexRouter = express.Router();

indexRouter.get('/1', showHots);
indexRouter.get('/2', showHotCategory);

// export default router
export default indexRouter;