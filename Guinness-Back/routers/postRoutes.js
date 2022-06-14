// import express
import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import fs from "file-system";
import db from "../config/dbConnection.js";
import path from "path";

// import function from controller
import {
  showPosts,
  showPostByNum,
  createPost,
  updatePost,
  deletePost,
  showPostByCat,
} from "../controllers/postsController.js";

var app = express();

// init express router
const PostRouter = express.Router();

// Get All Post
PostRouter.get("/posts", showPosts);

// Get Single Post
PostRouter.get("/posts/:id", showPostByNum);

PostRouter.get("/postsByCat/:id", showPostByCat);

// Create New Post
PostRouter.post("/posts", createPost);

// Update Post
PostRouter.put("/posts/:id", updatePost);

// Delete Post
PostRouter.delete("/posts/:id", deletePost);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

PostRouter.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    console.log("No file upload");
  } else {
    console.log(req.file.filename);
    var imgsrc = "http://127.0.0.1:3000/uploads/" + req.file.filename;
    var insertData = "INSERT INTO post(file_src)VALUES(?)";
    db.query(insertData, [imgsrc], (err, result) => {
      if (err) throw err;
      console.log("file uploaded");
    });
    res.send("image uploaded");
  }
});

export default PostRouter;
