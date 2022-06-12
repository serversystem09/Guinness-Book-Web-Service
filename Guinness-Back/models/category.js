import db from "../config/dbConnection.js";

export const getCategories = (result) => {
    db.query("SELECT * FROM category", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  

export const getCategoryByNum = (id, result) => {
    db.query("SELECT * FROM category WHERE categoryNum = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  

export const insertCategory = (data, result) => {
    db.query("INSERT INTO category SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
export const deleteCategoryByNum = (id, result) => {
    db.query("DELETE FROM category WHERE categoryNum = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
