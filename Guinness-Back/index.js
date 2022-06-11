
// import express
import express from "express";
// import cors
import cors from "cors";
import createError from 'http-errors';
import path from 'path';

import bodyParser from "body-parser";
 
// import routes
import postRouter from "./routers/postRoutes.js";
import userRouter from "./routers/userRoutes.js";
import authRouter from "./routers/authRouter.js";

import dotenv from 'dotenv';
dotenv.config();

console.log("확인"+ process.env.TOKEN_KEY);
// init express
const app = express();
  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
app.use('/post',postRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
