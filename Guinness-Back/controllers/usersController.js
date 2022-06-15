// Import function from Product Model
import { getUsers, getUserById, insertUser, updateUserById, deleteUserById } from "../models/user.js";
  
// Get All Users
export const showUsers = (req, res) => {
    getUsers((err, results) => {
        if (err){
            console.log(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get certain User 
export const showUserById = (req, res) => {
    getUserById(req.params.id, (err, results) => {
        if (err){
            console.log(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New User
export const createUser = (req, res) => {
    const data = req.body;
    insertUser(data, (err, results) => {
        if (err){
            console.log(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update User
export const updateUser = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateUserById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete User
export const deleteUser = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}