
// Import function from Post Model
import {getCSs, getMyCS, getCSByNum, insertCS, updateCSByNum, deleteCSByNum} from "../models/csboard.js";

export const showCSs = (req, res) => {
    getCSs( (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showMyCSs = (req, res) => {
    getMyCS(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showCSByNum = (req, res) => {
    getCSByNum(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  

export const createCS = (req, res) => {
    const data = req.body;
    insertCS(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  

export const updateCS = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCSByNum(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  

export const deleteCS = (req, res) => {
    const id = req.params.id;
    deleteCSByNum(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}