// Import function from Post Model
//
import {getIfUserReported, createReport} from "../models/report.js";


export const showIfUserReported = (req, res) => {

    getIfUserReported(req.params.pNum, req.params.uID, (err, results) => {
        if (err){
            console.log(err);
        }else{
           res.json(results);
        }
    });
}

export const pushReport = (req, res) => {
    createReport(req.params.pNum, req.params.uID, (err, results) => {
        if (err){
            console.log(err);
        }
        else{
            res.json(results);
        }
    });
}