const router = require("express").Router();
const followsController = require("../controllers/followsController");
const { isLoggedIn } = require("../controllers/middlewares");

router.post("/:userID/follow", isLoggedIn, followsController.following);
router.post("/insert/follower", isLoggedIn, followsController.follower);
router.get("/delete/follower", isLoggedIn, followsController.followDelete);

module.exports = router;