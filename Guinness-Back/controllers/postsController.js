// Import function from Post Model
 import {getPosts, getPostByNum, reportPostByNum, getPostByCat, insertPost, updatePostByNum, deletePostByNum} from "../models/post.js";
// Get All Posts
export const showPosts = (req, res) => {
    getPosts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Post
export const showPostByNum = (req, res) => {
    getPostByNum(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Post
export const showPostByCat = (req, res) => {
    getPostByCat(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Post
export const createPost = (req, res) => {
    const data = req.body;
    insertPost(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Post
export const updatePost = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePostByNum(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


export const reportPost = (req, res) => {
    const id    = req.params.id;
    reportPostByNum(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Post
export const deletePost = (req, res) => {
    const id = req.params.id;
    deletePostByNum(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}