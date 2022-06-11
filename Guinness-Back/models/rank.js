// import connection
import db from "../config/dbConnection.js";


//1. 좋아요 기준 -> 게시글 3개 추출(hot 게시글) => 사진, 좋아요, 사용자명 카드로
export const getByLikes = (result) => {
    db.query("SELECT user.nickName, post.postTitle, post.photo, post.likeNum as likes     from post    join user    on  post.writerID = user.userID     GROUP BY writerID     ORDER BY likes DESC     LIMIT 3", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


//2. event 참여자 수 기준 -> 게시글 4개 추출(인기 종목 순위) => 순위, 이벤트명
export const getByUserAmount = (result) => {
    db.query("SELECT categoryName, userAmount     FROM category     as userAmount     order by userAmount desc     LIMIT 4", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


//3. 좋아요 기준 -> 게시글 5개 추출 (총 기네스 순위) => 순위, 이름, 소분류
export const getRankingByLikes = (result) => {
    db.query("SELECT user.nickName, post.postTitle, post.event, post.likeNum as likes    from post    join user    on  post.writerID = user.userID     GROUP BY writerID     ORDER BY likes DESC     LIMIT 4", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}