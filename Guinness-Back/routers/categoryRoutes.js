//const { isLoggedIn } = require("../controllers/middlewares");

// import express
import express from "express";

// import function from controller
import {showCategories, showCategoryByNum, createCategory, deleteCategory} from "../controllers/categoryController.js";

// init express router
const catRouter = express.Router();
  
// Get All category
catRouter.get('/categories', showCategories);
  
// Get Single category
catRouter.get('/categories/:id', showCategoryByNum);
  
// Create New category
catRouter.post('/categories', createCategory);
  
  
// Delete category
catRouter.delete('/categories/:id', deleteCategory);

export default catRouter;
