import db from "../config/dbConnection.js";

// Import function from Post Model
import {getByLikes, getByUserAmount, getRankingByLikes} from "../models/post.js";

//main에서 볼 수 있는 등수 항목들
export const showHots = (req, res) => {
    getByLikes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
    getByUserAmount((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//총 event 순위 
export const showRanks = (req, res) => {
    getRankingByLikes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}