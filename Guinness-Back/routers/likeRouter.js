// import express
import express from "express";


import {showLikedPost, showIfUserLiked, pushLike} from "../controllers/likeController.js";


const likeRouter = express.Router();
  

likeRouter.get('/likedPosts/:id', showLikedPost);
likeRouter.get('/liked/:pNum/:uID', showIfUserLiked)
likeRouter.post('/like/:pNum/:uID', pushLike);

export default likeRouter;