const router = require("express").Router();
const eventsController = require("../controllers/eventsController");
const { isLoggedIn } = require("../controllers/middlewares");


router.get("", eventsController.index);
router.get("/:eventid", eventsController.show);


module.exports = router;


