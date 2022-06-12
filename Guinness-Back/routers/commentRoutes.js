// import express
import express from "express";

// import function from controller
import {showComments, showCommentByNum, createComment, deleteComment} from "../controllers/commentsController.js";


const commRouter = express.Router();

commRouter.get('/comments', showComments);
  

commRouter.get('/comment/:id', showCommentByNum);
  

commRouter.post('/comment', createComment);
  
commRouter.delete('/comment/:id', deleteComment);

export default commRouter;
