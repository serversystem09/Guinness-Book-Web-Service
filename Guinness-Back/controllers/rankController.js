import db from "../config/dbConnection.js";

// Import function from Post Model
import {getRankingByLikes} from "../models/rank.js";


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