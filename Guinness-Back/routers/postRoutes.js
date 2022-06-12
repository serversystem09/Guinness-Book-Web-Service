// import express
import express from "express";
import multer from 'multer';
import bodyParser from "body-parser";

// import function from controller
import {showPosts, showPostByNum, createPost, updatePost, deletePost} from "../controllers/postsController.js";

var app = express();

// init express router
const PostRouter = express.Router();
  
// Get All Post
PostRouter.get('/posts', showPosts);
  
// Get Single Post
PostRouter.get('/posts/:id', showPostByNum);
  
// Create New Post
PostRouter.post('/posts', createPost);
  
// Update Post
PostRouter.put('/posts/:id', updatePost);
  
// Delete Post
PostRouter.delete('/posts/:id', deletePost);
 
export default PostRouter;