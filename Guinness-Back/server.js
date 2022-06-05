const port = 3000;
const express = require("express");
const app = express();
const path = require("path");
const layouts = require("express-ejs-layouts");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const connectFlash = require("connect-flash");
const router = require("./routes/index");

app.set("port", process.env.PORT || "3000");

const { sequelize } = require("./models");
sequelize
  .sync()
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error("데이터베이스 연결 실패");
  });

app.use(layouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser(process.env.COOKIE_SECRET)); //요청에 동봉된 쿠키를 해석. 매개변수 : 클라이언트에서 수정 막음

/*app.use(
  session({
    //세션설정(for 로그인 등)
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    }, 
  })
);*/
app.use(connectFlash());

app.use(passport.initialize());
app.use(passport.session());
//passport.use(User.createStrategy());
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());
/*
app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  res.locals.currentUser = req.user;
  res.locals.flashMessages = req.flash();
  next();
});
app.use("/", router);*/

app.listen(port, () => {
  console.log(`Server is listening on port number: ${port}`);
});
