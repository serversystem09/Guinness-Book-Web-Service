// Import function from Post Model

import {getLikedPosts, getIfUserLiked, createLike} from "../models/like.js";

export const showLikedPost = (req, res) => {
    const id = req.params.id;
    getLikedPosts(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showIfUserLiked = (req, res) => {
    const uID = req.params.uID;
    const pNum = req.params.pNum;
    getIfUserLiked(pNum, uID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const pushLike = (req, res) => {
    const uID = req.params.uID;
    const pNum = req.params.pNum;
    createLike(pNum, uID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
