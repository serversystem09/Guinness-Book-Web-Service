/*const router = require("express").Router();
const postsController = require("../controllers/postsController");
const { isLoggedIn } = require("../controllers/middlewares");

router.get("/", postsController.index, postsController.indexView);
router.get("/new", postsController.new);
router.post("/create", postsController.create, postsController.redirectView);

router.get("/:id/edit", postsController.edit);
router.put("/:id/update", postsController.update, postsController.redirectView);
router.get("/:id", postsController.show, postsController.showView);
router.delete("/:id/delete", postsController.delete, postsController.redirectView);

router.get("/posts/id/search", isLoggedIn, postsController.postsearch);

module.exports = router;
*/

// import express
import express from "express";

// import function from controller
import {showPosts, showPostByNum, createPost, updatePost, deletePost} from "../controllers/postsController.js";

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