const router = require("express").Router();
const followsController = require("../controllers/followsController");
const { isLoggedIn } = require("../controllers/middlewares");

router.get("", followsController.index, followsController.indexView);
router.get("/new", followsController.new);
router.post(
  "/create",
  followsController.create,
  followsController.redirectView
);
router.get("/:id/edit", followsController.edit);
router.put(
  "/:id/update",
  followsController.update,
  followsController.redirectView
);
router.get("/:id", followsController.show, followsController.showView);
router.delete(
  "/:id/delete",
  followsController.delete,
  followsController.redirectView
);

router.post("/:userID/follow", isLoggedIn, followController.following);
router.post("/insert/follower", isLoggedIn, followController.follower);
router.get("/delete/follower", isLoggedIn, followController.followDelete);
router.get("/follow/ornot", isLoggedIn, followController.ornot);
router.get("/follower/cnt", isLoggedIn, followController.followerCNT);
router.get("/following/cnt", isLoggedIn, followController.followingCNT);

module.exports = router;
