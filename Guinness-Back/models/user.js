// import connection
import db from "../config/dbConnection.js";
import bcrypt from 'bcryptjs';

// Get All Posts
export const getUsers = (result) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Get certain User
export const getUserById = (id, result) => {
  db.query("SELECT * FROM user WHERE userID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

// Insert User to Database
export const insertUser = (data, result) => {
  db.query("INSERT INTO user SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update User to Database
export const updateUserById = (data, id, result) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).send({
        msg: err
      });
    } else {
      db.query(
        "UPDATE user SET nickName = ?, phoneNumber = ?, email = ?, password = ?, birth = ? WHERE userID = ?",
        [
          data.nickName,
          data.phoneNumber,
          data.email,
          hash,
          data.birth,
          id,
        ],
        (err, results) => {
          if (err) {
            console.log(err);
            result(err, null);
          } else {
            result(null, results);
          }
        }
      );
    }});
};

// Delete User to Database
export const deleteUserById = (id, result) => {
  db.query("DELETE FROM user WHERE userID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
