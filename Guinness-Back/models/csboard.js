import db from "../config/dbConnection.js";

export const getCSs = (result) => {
    db.query("SELECT * FROM csboard", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  

export const getCSByNum = (id, result) => {
    db.query("SELECT * FROM csboard WHERE csNum = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  

export const insertCS = (data, result) => {
    db.query("INSERT INTO csboard SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  

export const updateCSByNum = (data, id, result) => {
    db.query("UPDATE csboard SET csTitle = ?, content = ? WHERE csNum = ?", [data.csTitle, data.content, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
export const deleteCSByNum = (id, result) => {
    db.query("DELETE FROM csboard WHERE csNum = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}