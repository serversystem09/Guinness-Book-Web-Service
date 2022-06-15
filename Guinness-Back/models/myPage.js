// import connection
import db from "../config/dbConnection.js";
  

  
export const getMyPosts = (id, result) => {
    db.query("SELECT * FROM post WHERE writerID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getPostMyComments = (id, result) => {
    db.query("SELECT * from post where postNum IN (SELECT postNum FROM comment where userID = ?);", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
