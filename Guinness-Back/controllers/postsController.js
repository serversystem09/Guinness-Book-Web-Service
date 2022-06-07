const { prototype } = require('multer/lib/counter');
const Connection = require('mysql/lib/Connection');
const Comment = require('../models/comment');
const User = require('../models/user');
const Post = require('../models/post');
const { internalServerError } = require('./errorController');
const multer = require("multer");
const { isLoggedIn } = require("./middlewares");
const passport = require("passport");


getPostParams = body => {
    return {
        postTitle: body.postTitle,
        content: body.content,
        eventID: body.eventID,
        photo: body.photo
//사용자에게 받는 게 아니라 사용자 아이디는 생성 전, postNum, date, like는 생성 후에 받는 것임. 
        // likeNum: body.likeNum,
        // writeDate: new Date(),
        // postNum: Date.now().toString(),
        // writerID: req.session.user.id
    }
}



//대분류 하위의 게시글 목록 -> 각 대분류마다 id값이 있고, 대분류 항목을 누르면
//event키의 값이 바뀌면서 다른 페이지들을 보여주게 됨. 
//처음에 게시글 목록 항목 들어 가면 가장 처음에 있는 eventId가 가장 작은 것부터 보여주게끔.
const list = async function(req, res){
  const eventID = req.params.event;
  const post = await Post.findAll({ where: {eventID: eventID} })
    .sort('-createdAt')
    .exec(function(err, posts){
      if(error) {
        console.log(`Error fetching courses: ${error.message}`);
        return res.sendStatus(404);
        };
        res.render(":event/post/list")}
        )};


//글 작성으로 보내기
//로그인 확인은 미들웨어 라우터가.
//getupload
  const newPost = (req, res) => {
    console.log("post 모듈 안에 있는 newPost 호출됨.");
      res.sendfile(path.join(__dirname, 'create'));
  };


//글 작성 화면 -> 글 작성 완료 버튼 누를 시 동작
//postupload
const create = async (req, res) => {
    let postParams = getPostParams(req.body);
    let writerID = req.session.User.userID;
    let writeDate = Date.now().toString();

    try{
      let post = await Post.create(postParams, writerID, writeDate);
      req.flash('success', `Add new post!`);
      res.locals.redirect = "/:eventId/posts/:id";
      res.locals.post = post;
      next();
    } catch(error) {
      console.log(`Error saving course: ${error.message}`);
      return res.sendStatus(404);
      //redirect
      };
  };
//사진 첨부 확인하기



//게시글의 상세 페이지
//get
  const show = async (req, res, next) => {
    const eventID = req.params.event;
    const postNum = req.params.id;
    try{
    let post = await Post.find(where :{id: postNum});
    res.locals.post = post;
    next();
    }catch(error) {
      console.log(`Error fetching course by ID: ${error.message}`);
      return res.sendStatus(404);
    };
  };



  const showView = async(req, res) => {
    let eventID = req.params.event;
    const postNum = req.params.id;
    res.render("post/show", {post: post})
  };



  //로그인 되어 있는지 확인 -> 삭제기능 -> 삭제 화면으로 랜더링하는 함수 호출
  const deletePost = async (req, res, next) => {
    const postNum = req.params.id;
    let user = req.session;

    const post = await Post.findOne(where { id: postNum } )
    .then(post => {
      await Post.destroy({where:{id:postNum}})
      req.flash('success', 'complete remove post');
      res.locals.redirect = "/courses";
      return res.sendStatus(200);
    })
    .catch(err=>
      if (!post) {
        return res.sendStatus(404);
      }       
      if (Post.writerID !== User.userID) {
        return res.sendStatus(403);
      }
      );
//await Post.filter((Post) => Post.postNum !== postNum);
  };





  //getUpdate
  const edit = async (req, res, next) => {
      const postNum = req.params.id;
      const user = req.session;
      try{
      const post = await Post.findByPk(postNum);
      res.render("Posts/edit", {
        post: post
      });
    }catch(error){
      if (!post) {
        return res.sendStatus(404);
       }
      if (post.writerID !== req.session.user.id) {
        return res.sendStatus(403);
       }    
    }

    //edit할 자격이 있으면 update하는 화면으로 보냄. -> 사용자의 put 요청 받음.  
      res.status(200).sendFile('editPost', { post });
};


//putUpdate
  const update = async (req, res, next) => {
    let postNum = req.params.id;
    let postParams = getPostParams(req.body);

    const post = await Post.findByPkAndUpdate(postNum, postParams)
    .then(post => {
      res.locals.post = post;
      req.flash('success', 'complete update post!');
      res.locals.redirect = "/:event/:id";
      next();
    })
    .catch(err => {
      if (!update) {
        return res.sendStatus(404);
        next(err);}
      });
};




module.exports = {
    list,
    newPost,
    create,
    edit,
    update,
    show,
    showView,
    deletePost
}