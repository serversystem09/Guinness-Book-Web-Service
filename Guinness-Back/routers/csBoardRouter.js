// import express
import express from "express";

// import function from controller
import {showCSs, showCSByNum, createCS, updateCS, deleteCS} from "../controllers/CSController.js";

// init express router
const CSRouter = express.Router();
  
// Get All Post
CSRouter.get('/CSs', showCSs);
  
// Get Single Post
CSRouter.get('/CS/:id', showCSByNum);
  
// Create New Post
CSRouter.post('/create', createCS);
  
// Update Post
CSRouter.put('/update/:id', updateCS);
  
// Delete Post
CSRouter.delete('/delete/:id', deleteCS);

export default CSRouter;