const router = require('express').Router();
const postsController = require("../controllers/postsController");
const { isLoggedIn } = require("../controllers/middlewares");


//new -> newPost, delete-> deletePost로 컨트롤러 함수 명 변경
//post/:id로 id 추가
//redirectView, indexView, showView 삭제 
//postSearch 삭제


//router.get("/", postsController.list);      //event의 루트에 들어 왔을 때의 라우터
//router.get("/:event", postsController.list);//event에 해당하는 값에 따라 페이지 달라짐
router.get("/new", isLoggedIn, postsController.newPost);
router.post("/create", postsController.create);


router.get("/:id/edit", isLoggedIn, postsController.edit);
router.put("/:id/update", postsController.update);
router.get("/:id", postsController.show, postsController.showView);
router.delete("/:id/delete", isLoggedIn, postsController.deletePost);		

module.exports = router;

