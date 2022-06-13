// Import function from Post Model

import {getFollows, getFollowersByID, getFolloweesByID, insertFollow, deleteFollowByID} from "../models/follow.js";

export const showFollows = (req, res) => {
    getFollows((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
export const showFollowersByID = (req, res) => {
  const id = req.params.id;
    getFollowersByID(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showFolloweesByID = (req, res) => {
  const id = req.params.id;
    getFolloweesByID(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createFollow = (req, res) => {
    const fwer = req.params.fwer;
    const fwee = req.params.fwee;
    insertFollow(fwer, fwee, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const deleteFollow = (req, res) => {
    const fwer = req.params.fwer;
    const fwee = req.params.fwee;
    deleteFollowByID(fwer, fwee, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}