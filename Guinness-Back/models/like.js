import db from "../config/dbConnection.js";


export const getLikedPosts = (id, result) => {
    db.query("SELECT * from post where postNum IN (SELECT postNum FROM likeTbl where userID = ?);",[id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  

export const getIfUserLiked = (pNum, uID, result) => {

    db.query("SELECT count(*) FROM likeTbl WHERE postNum = ? AND userID = ?;", [pNum, uID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const createLike = (pNum, uID, result) => {
  db.query("INSERT INTO likeTbl (postNum, userID) VALUES (?,?)", [pNum, uID], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
        db.query("UPDATE post SET likeNum = likeNum + 1 WHERE postNum = ?", [pNum], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    }); 
      }
  });  
}
