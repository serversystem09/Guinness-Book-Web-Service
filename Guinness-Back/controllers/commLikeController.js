// Import function from Post Model
//
import {getSortByLiked, getIfUserLiked, createLike} from "../models/commLike.js";

export const showByLiked = (req, res) => {
    const pNum = req.params.pNum;
    getSortByLiked(pNum, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showIfUserLiked = (req, res) => {
    const uID = req.params.uID;
    const cNum = req.params.cNum;
    getIfUserLiked(cNum, uID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const pushLike = (req, res) => {
    const uID = req.params.uID;
    const cNum = req.params.cNum;
    createLike(cNum, uID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
