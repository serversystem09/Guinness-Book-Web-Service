const router = require("express").Router();
const usersController = require("../controllers/usersController");
const { isLoggedIn } = require("../controllers/middlewares");

/*
router.get("/", usersController.index, usersController.indexView);
router.get("/new", usersController.new);
router.post(
  "/create",
  usersController.validate,
  usersController.create,
  usersController.redirectView
);
router.get("/login", usersController.login);
router.post("/login", usersController.authenticate);
router.get("/logout", usersController.logout, usersController.redirectView);
router.get("/:userID/edit", usersController.edit);
router.put("/:userID/update", usersController.update, usersController.redirectView);
router.get("/:userID", usersController.show, usersController.showView);
router.delete("/:userID/delete", usersController.delete, usersController.redirectView);

//router.get("/users/id/search", isLoggedIn, usersController.userSearch);
*/

module.exports = router;