import db from "../config/dbConnection.js";
  
// Get All Posts
export const getPosts = (result) => {
    db.query("SELECT * FROM post", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Posts
export const getPostByNum = (id, result) => {
    db.query("SELECT * FROM post WHERE postNum = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const getPostByCat = (id, result) => {
    db.query("SELECT * FROM post WHERE categoryNum = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Insert Post to Database
export const insertPost = (data, result) => {
    db.query("INSERT INTO post SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Post to Database
export const updatePostByNum = (data, id, result) => {
    db.query("UPDATE post SET postTitle = ?, content = ? WHERE postNum = ?", [data.postTitle, data.content, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// report Post
export const reportPostByNum = (id, result) => {
    db.query("UPDATE post SET reportCount = reportCount + 1 WHERE postNum = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Product to Database
export const deletePostByNum = (id, result) => {
    db.query("DELETE FROM post WHERE postNum = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
