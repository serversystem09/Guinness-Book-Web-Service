// Import function from Post Model
//
import {getIfUserReported, createReport} from "../models/report.js";


export const showIfUserReported = (req, res) => {
    const uID = req.params.uID;
    const pNum = req.params.pNum;
    getIfUserReported(pNum, uID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const pushReport = (req, res) => {
    const uID = req.params.uID;
    const pNum = req.params.pNum;
    createReport(pNum, uID, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}