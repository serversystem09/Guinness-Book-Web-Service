import {getHotRanks} from "../models/ranks.js";


/*
//main에서 볼 수 있는 등수 항목들
export const showHots = (req, res) => {
<<<<<<< HEAD
  getByLikes((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
export const showHotCategory = (req, res) => {
  getByUserAmount((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
=======
    getByLikes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);

 //           export const showHotCategory = (req, res) => {
                getByUserAmount((err, results) => {
                    if (err){
                        res.send(err);
                    }else{
                        res.json(results);
                    }
                });
            }            
        }
    );
}
*/

export const showHotRanks = (req, res) => {
    getHotRanks((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        } 
    });
}
>>>>>>> bfde6b226dce99fc8f26a9c93afa6a44dd6ff9bb
