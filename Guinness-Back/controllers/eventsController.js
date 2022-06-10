
httpStatus = require("http-status-codes");
const { prototype } = require('multer/lib/counter');
const Connection = require('mysql/lib/Connection');
const Comment = require('../models/comment');
const User = require('../models/user');
const Post = require('../models/post');
const { internalServerError } = require('./errorController');
const multer = require("multer");
const { isLoggedIn } = require("./middlewares");
const passport = require("passport");
const Event = require('../models/event');


//특정 이벤트에 게시글들이 추가될 때마다 userAmount가 증가해야함





//대분류 하위의 게시글 목록 -> 각 대분류마다 id값이 있고, 대분류 항목을 누르면
//event키의 값이 바뀌면서 다른 페이지들을 보여주게 됨. 
//처음에 게시글 목록 항목 들어 가면 가장 처음에 있는 eventId가 가장 작은 것부터 보여주게끔.

//게시글을 보여주는 부분을 index로 옮긴다 
//루트로 들어오면 가장 위에 있는 대분류 하위의 글들 보여주는 페이지로 랜더링
const index = async (req, res, next) => {
        Event.find()
          .then(courses => {
            res.locals.courses = courses;
            next();
          })
          .catch(error => {
            console.log(`Error fetching courses: ${error.message}`);
            next(error);
          });
      };


const indexView = (req, res) => {
    res.render("courses/index");
  };


//특정 eventid에 대한 글들의 목록을 보여줌
const show = async (req, res, next) => {
    const eventID = req.params.event;
    const post = await Post.findByPk({ where: {eventID: eventID}})
      .sort('-createdAt')
      .catch(function(err, posts){
        if(error) {
          console.log(`Error fetching courses: ${error.message}`);
          return res.sendStatus(404);
          };
          res.render(":event/post/list")}
          )
};


module.exports = {
    index,
    show,
}

