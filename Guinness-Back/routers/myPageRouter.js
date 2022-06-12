// import express
import express from "express";
  
// import function from controller
import { showMyPosts, showPostMyComments} from "../controllers/myPageController.js";
  
// init express router
const MPRouter = express.Router();
  

MPRouter.get('/myPosts/:id', showMyPosts);
  

MPRouter.get('/myCommentPost/:id', showPostMyComments);

  
// export default router
export default MPRouter;