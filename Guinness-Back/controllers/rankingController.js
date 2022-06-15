import db from "../config/dbConnection.js";

// Import function from Post Model
import {getRankingByLikes} from "../models/ranks.js";

 
//총 event 순위 
export const showRanks = (req, res) => {
    getRankingByLikes((err, results) => {
        if (err){
            console.log(err);
        }else{
            res.json(results);
        }
    });
} 
