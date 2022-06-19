import db from "../config/dbConnection.js";


export const getSortByLiked = (pNum, result) => {
    db.query("SELECT * from comment where postNum = ? ORDER BY likeNum DESC;",[pNum], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
//유저가 댓글에 좋아요 눌렀는지 검사 = 눌렀으면 1, 안눌렀으면 0 반환 => 좋아요 한번 누르면 못누르게끔
export const getIfUserLiked = (cNum, uID, result) => {

    db.query("SELECT count(*) FROM commLikeTbl WHERE commentNum = ? AND userID = ?;", [cNum, uID], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const createLike = (cNum, uID, result) => {
  db.query("INSERT INTO commLikeTbl (commentNum, userID) VALUES (?,?)", [cNum, uID], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
           db.query("UPDATE comment SET likeNum = likeNum + 1 WHERE commentNum = ?", [cNum], (err, results) => {             
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
