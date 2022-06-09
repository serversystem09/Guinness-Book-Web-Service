const router = require("express").Router();
const commentsController = require("../controllers/commentsController");
const { isLoggedIn } = require("../controllers/middlewares");


module.exports = router;
