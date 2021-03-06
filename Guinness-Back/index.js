// import express
import express from "express";
// import cors
import cors from "cors";
import createError from "http-errors";
import path from "path";

import bodyParser from "body-parser";
import multer from "multer";

// import routes
import postRouter from "./routers/postRoutes.js";
import userRouter from "./routers/userRoutes.js";
import authRouter from "./routers/authRouter.js";
import catRouter from "./routers/categoryRoutes.js";
import commRouter from "./routers/commentRoutes.js";
import followRouter from "./routers/followRoutes.js";
import CSRouter from "./routers/csBoardRouter.js";
import commLikeRouter from "./routers/commLikeRouter.js";

import MPRouter from "./routers/myPageRouter.js";
import indexRouter from "./routers/indexRoutes.js";
import rankRouter from "./routers/rankingRoutes.js";
import likeRouter from "./routers/likeRouter.js";
import reportRouter from "./routers/reportRoutes.js";

import dotenv from "dotenv";


dotenv.config();

// init express
const app = express();

// use express json
app.use(express.json());

// use cors
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// use router
app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/cat", catRouter);
app.use("/comm", commRouter);
app.use("/foll", followRouter);
app.use("/cs", CSRouter);
app.use("/", indexRouter);
app.use("/rank", rankRouter);
app.use("/mypage", MPRouter);
app.use("/like", likeRouter);
app.use("/report", reportRouter);
app.use("/commLike", commLikeRouter);

// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
