/*작동하는 코드
const express = require("express");
const app = express();
*/

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./routers/users.js');
 
const app = express();
 
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.use(cors());
 
app.use('/api', indexRouter);
 
// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});
 
app.listen(3000,() => console.log('Server is running on port 3000'));

// const layouts = require("express-ejs-layouts");
// const router = require("./routers/index");
// const methodOverride = require("method-override");
// const passport = require("passport");
// const cookieParser = require("cookie-parser");
// const expressSession = require("express-session");
// const expressValidator = require("express-validator");
// const connectFlash = require("connect-flash");
// const User = require("./models/user");

// const { sequelize } = require("./models");
// sequelize.sync();

// app.set("view engine", "ejs");
// app.set("port", process.env.PORT || "3000");

// app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

// app.use(layouts);
// app.use(express.static("public"));
// app.use(expressValidator());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use(cookieParser(process.env.COOKIE_SECRET)); //요청에 동봉된 쿠키를 해석. 매개변수 : 클라이언트에서 수정 막음
// app.use(
//   session({
//     //세션설정(for 로그인 등)
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//       httpOnly: true,
//       secure: false,
//     },
//   })
// );
// app.use(connectFlash());

// app.use(passport.initialize());
// // app.use(passport.session());
// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//   res.locals.loggedIn = req.isAuthenticated();
//   res.locals.currentUser = req.user;
//   res.locals.flashMessages = req.flash();
//   next();
// });
// app.use("/", router);

/* 사용되는 코드
const port = 3000;
const postlist = ["post1", "post2"];

app.use(express.static("public"));

app.get("/api/postlist", (req, res) => {
  res.send(postlist);
});

app.listen(port, () => {
  console.log(
    `The Express.js server hs started and is listening on port number: ${port}`
  );
});
*/
