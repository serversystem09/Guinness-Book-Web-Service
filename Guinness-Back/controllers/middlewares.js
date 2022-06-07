exports.isLoggedIn = (req, res, next) => {
//로그아웃, 게시글 업로드, 마이페이지 등의 페이지에 접근하는 경우 로그인 확인
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("로그인 필요");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
//회원가입, 로그인 라우터에 접근하는 경우
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};



