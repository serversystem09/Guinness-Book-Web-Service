const router = require("express").Router();
const commentsController = require("../controllers/commentsController");
const { isLoggedIn } = require("../controllers/middlewares");

router.get("", commentsController.index, commentsController.indexView);
router.get("/new", commentsController.new);
router.post(
  "/create",
  commentsController.create,
  commentsController.redirectView
);
router.get("/:id/edit", commentsController.edit);
router.put(
  "/:id/update",
  commentsController.update,
  commentsController.redirectView
);
router.get("/:id", commentsController.show, commentsController.showView);
router.delete(
  "/:id/delete",
  commentsController.delete,
  commentsController.redirectView
);

module.exports = router;
