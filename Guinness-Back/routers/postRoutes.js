const router = require("express").Router();
const postsController = require("../controllers/postsController");
const { isLoggedIn } = require("../controllers/middlewares");

router.get("/", postsController.index, postsController.indexView);
router.get("/new", postsController.new);
router.post("/create", postsController.create, postsController.redirectView);

router.get("/:id/edit", postsController.edit);
router.put("/:id/update", postsController.update, postsController.redirectView);
router.get("/:id", postsController.show, postsController.showView);
router.delete("/:id/delete", postsController.delete, postsController.redirectView);

router.get("/posts/id/search", isLoggedIn, postsController.postsearch);

module.exports = router;
