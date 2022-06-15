// Import function from Post Model
import {getComments, getCommentByNum, insertComment, deleteCommentByNum} from "../models/comment.js";

export const showComments = (req, res) => {
    getComments(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  

export const showCommentByNum = (req, res) => {
    getCommentByNum(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  

export const createComment = (req, res) => {
    const data = req.body;
    insertComment(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  

export const deleteComment = (req, res) => {
    const id = req.params.id;
    deleteCommentByNum(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}