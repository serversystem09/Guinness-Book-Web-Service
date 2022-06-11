/*module.exports = (sequelize, Sequelize) => {
  class Post extends Sequelize.Model {
    //함수 입력하기
  }
  Post.init(
    {
      postNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      postTitle: {
        type: Sequelize.varchar(40),
        allowNull: false,
      },
      content: {
        type: Sequelize.varchar(10000),
        allowNull: false,
      },
      eventID: {
        type: Sequelize.INTEGER,
        references: {
          model: Event,
          key: "eventID",
        },
      },
      writerID: {
        type: Sequelize.varchar(20),
        references: {
          model: User,
          key: "userID",
        },
      },
      likeNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0
        },
      },
      commentON: {
        type: Sequelize.tinyint(1),
      },
      writeDate: {
        type: Sequelize.datetime(),
      },
    },
    {
      sequelize,
      modelName: "post",
      timestamps: true,
    }
  );
  return Post;
};*/
// import connection
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
