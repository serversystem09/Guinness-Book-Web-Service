// import express
import express from "express";


import {showIfUserReported, pushReport} from "../controllers/reportController.js";


const reportRouter = express.Router();
  

reportRouter.get('/check/:pNum/:uID', showIfUserReported)
reportRouter.post('/report/:pNum/:uID', pushReport);

export default reportRouter;
