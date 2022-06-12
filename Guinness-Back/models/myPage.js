// import connection
import db from "../config/dbConnection.js";
  

  
export const getMyPosts = (id, result) => {
    db.query("SELECT * FROM post WHERE writerID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const getPostMyComments = (id, result) => {
    db.query("SELECT * FROM post WHERE writerID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
