//합칠 때 필요한 파일 

const router = require("express").Router();
const postsController = require("../controllers/postsController");
const { isLoggedIn } = require("../controllers/middlewares");


//new -> newPost, delete-> deletePost로 컨트롤러 함수 명 변경
//post/:id로 id 추가
//redirectView, indexView, showView 삭제 
//postSearch 삭제

router.get("/", postsController.index);
router.get("/new", isLoggedIn, postsController.newPost);
router.post("/create", postsController.create, postsController.redirectView);

router.get("/:id/edit", isLoggedIn, postsController.edit);
router.put("/:id/update", postsController.update);
router.get("/:id", postsController.show);
router.delete("/:id/delete", isLoggedIn, postsController.deletePost);		

module.exports = router;
