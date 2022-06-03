const Connection = require('mysql/lib/Connection');
const Comment = require('../models/Comment');
const Post = require('../models/post');

getPostParams = body => {
    return {
        postTitle: body.postTitle,
        content: body.content,
        eventID: body.eventID,
        commentON: req.body.commentON,
        wrtieDate: new Date(),
        postNum: Date.now().toString(),
        writerID: req.session.user.id
    }
}

//게시글 목록 보여주기 //여기 수정하기
const index = async function(req, res){
    var queryString = 'select postTitle, content, eventID, writerID, likeNum, commentON, writeDate from Post'
    
    Post.query(queryString, function (err, data) {
        if(err){
            return console.log(err);
        }
        console.log(data)
        res.render('postList', {userlist: rows, title: 'PostListTitle'})
    })
    // const posts = await Post.getAllPosts(({ 
    //     postNum,
    //     postTitle,
    //     content,
    //     eventID,
    //     likeNum,
    //     writeDate,
    //     writerID,
    //     commentON,}));
    //     res.render("courses/index");
};  




//글 작성 화면
//로그인 확인은 미들웨어 라우터가 알아서 함!
//getupload
  const newPost = (req, res) => {
    console.log("post 모듈 안에 있는 newPost 호출됨.");
      res.sendfile(path.join(__dirname, '../public/index.html'));
  };


//글 작성 화면 -> 글 작성 완료 버튼 누를 시 동작
//postupload
const create = async (req, res, next) => {
    let postParams = getPostParams(req.body);
    Post.create(postParams)
        .then(post => {
            res.locals.redirect = "/posts";
            res.locals.post = post;
        })
        .catch(error => {
            console.log(`Error saving course: ${error.message}`);
            next(error);
        })
  };

  const redirectView = async(req, res, next) => {
    let redirectPath = res.locals.redirect;
    if (redirectPath !== undefined) res.redirect(redirectPath);
    else next();
  }


//게시글의 상세 페이지
//get
  const show = async (req, res) => {
    let postNum = req.params.postNum;
    Post.findById(postNum)
      .then(post => {
        res.locals.post = poat;
        res.render("posts/show");
      })
      .catch(error => {
        console.log(`Error fetching course by ID: ${error.message}`);
        //에러 핸들링할 것 생각좀
      });
  };



  //로그인 되어 있는지 확인 필요 -> 삭제기능 -> 삭제 화면으로 랜더링하는 함수 호출
  const deletePost = async (req, res) => {
    const { no: postNum } = req.query;
    const { User } = req.session;
    const post = await Post.find((Post) => Post.postNum === postNum);
    if (!post) {
      return res.sendStatus(404);
    }
  
    if (Post.writerID !== User.id) {
      return res.sendStatus(403);
    }
    await Post.filter((Post) => Post.postNum !== postNum);
    req.flash('success', 'complete remove post');
    return res.sendStatus(200);
  };


  //getUpdate
  const edit = async (req, res, next) => {
    const postNum = req.params.postNum;
    const user = req.session;
    const post = await Post.find((Post) => Post.postNum === postNum);

    if (!post) {
        return res.sendStatus(404);
      }
      if (post.writerID !== user.id) {
        return res.sendStatus(403);
      }
      
    // const {
    //     body: { postTitle, content, eventID, commentON },
    //     query: { no: id },
    //   } = req;

    //   const update = await Post.update(postNum, { postTitle, content, eventID, commentON });
    //   if (!update) {
    //     return res.sendStatus(404);
    //   }
      res.status(200).sendFile('editPost', { post });
};


//putUpdate
  const update = async (req, res, next) => {
    const {
        body: { title, content, eventID, commentON },
        query: { no: postNum },
      } = req;
      const post = await Post.find((Post) => Post.postNum === postNum);
      if (!post) {
        return res.sentDtatus(404);
      }
      if (post.writerID !== req.session.user.id) {
        return res.sendStatus(403);
      }
      const update = await Post.update(postNum, { title, content, eventID, commentON });
      if (!update) {
        return res.sendStatus(404);
      }
    
    req.flash('success', 'complete update post!');
    res.locals.redirect = "/posts";
    //   return res.sendStatus(200);
    // res.status(200).sendFile(`editPost/${postId}`, { post });
};




module.exports = {
    index,
    newPost,
    create,
    edit,
    update,
    show,
    deletePost,
    redirectView
}