// import express
import express from "express";


import {showByLiked, showIfUserLiked, pushLike} from "../controllers/commLikeController.js";


const commLikeRouter = express.Router();
  

commLikeRouter.get('/sortByLiked/:pNum', showByLiked);
commLikeRouter.get('/liked/:cNum/:uID', showIfUserLiked)
commLikeRouter.post('/like/:cNum/:uID', pushLike);

export default commLikeRouter;