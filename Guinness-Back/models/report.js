import db from "../config/dbConnection.js";


export const getIfUserReported = (pNum, uID, result) => {

    db.query("SELECT count(*) FROM reportTbl WHERE postNum = ? AND userID = ?;", [pNum, uID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const createReport = (pNum, uID, result) => {
  db.query("INSERT INTO reportTbl (postNum, userID) VALUES (?,?)", [pNum, uID], (err, results) => {             
      if(err) {
          console.log(err);
         result(err, null);
      } else {
          result(null, results);
      }
  });   

  db.query("UPDATE post SET reportCount = reportCount + 1 WHERE postNum = ?", [pNum], (err, results) => {             
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
}); 

}
