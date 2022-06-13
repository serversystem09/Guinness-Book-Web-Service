// import express
import express from "express";


import {showFollows, showFollowersByID, showFolloweesByID, createFollow, deleteFollow} from "../controllers/followsController.js";


const followRouter = express.Router();
  

followRouter.get('/follows', showFollows);
followRouter.get('/followers/:id', showFollowersByID);
followRouter.get('/followees/:id', showFolloweesByID);

  
followRouter.post('/create/:fwer/:fwee', createFollow);

followRouter.delete('/delete/:fwer/:fwee', deleteFollow);

export default followRouter;