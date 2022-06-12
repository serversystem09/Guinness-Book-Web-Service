import {getByLikes, getByUserAmount} from "../models/ranks.js";

//main에서 볼 수 있는 등수 항목들
export const showHots = (req, res) => {
    getByLikes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);          
        }
     });
}

export const showHotCategory = (req, res) => {
    getByUserAmount((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}  
