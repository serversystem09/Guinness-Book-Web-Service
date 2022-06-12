import db from "../config/dbConnection.js";

export const getFollows = (result) => {
    db.query("SELECT * FROM follow", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  

export const getFollowersByID = (id, result) => {
    db.query("SELECT followerID FROM follow WHERE followeeID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getFolloweesByID = (id, result) => {
  db.query("SELECT followeeID FROM follow WHERE followerID = ?", [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}

export const insertFollow = (data, result) => {
    db.query("INSERT INTO follow SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
export const deleteFollowByID = (fwer, fwee, result) => {
    db.query("DELETE FROM follow WHERE followerID = ? AND followeeID = ?", [fwer, fwee], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
