import db from "../config/dbConnection.js";
  

export const getComments = (id, result) => {
    db.query("SELECT * FROM comment where postNum =?",[id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  

export const getCommentByNum = (id, result) => {
    db.query("SELECT * FROM comment WHERE commentNum = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
export const insertComment = (data, result) => {
    db.query("INSERT INTO comment SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const deleteCommentByNum = (id, result) => {
    db.query("DELETE FROM comment WHERE CommentNum = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}