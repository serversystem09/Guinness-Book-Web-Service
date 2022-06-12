// Import function from Product Model
import { getMyPosts, getPostMyComments } from "../models/myPage.js";



export const showMyPosts = (req, res) => {
    getMyPosts(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showPostMyComments = (req, res) => {
    getPostMyComments(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}