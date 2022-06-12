// Import function from Post Model
import {getCategories, getCategoryByNum, insertCategory, deleteCategoryByNum} from "../models/category.js";
// Get All Category
export const showCategories = (req, res) => {
    getCategories((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Category
export const showCategoryByNum = (req, res) => {
    getCategoryByNum(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Category
export const createCategory = (req, res) => {
    const data = req.body;
    insertCategory(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Category
export const deleteCategory = (req, res) => {
    const id = req.params.id;
    deleteCategoryByNum(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}