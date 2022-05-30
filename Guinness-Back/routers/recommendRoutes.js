const router = require("express").Router();
const recommendsController = require("../controllers/recommendsController");
const { isLoggedIn } = require("../controllers/middlewares");

router.get("/", recommendsController.index, recommendsController.indexView);
router.get("/new", recommendsController.new);
router.post("/create", recommendsController.create, recommendsController.redirectView);

router.get("/:id/edit", recommendsController.edit);
router.put("/:id/update", recommendsController.update, recommendsController.redirectView);
router.get("/:id", recommendsController.show, recommendsController.showView);
router.delete("/:id/delete", recommendsController.delete, recommendsController.redirectView);

router.get("/recommends/id/search", isLoggedIn, recommendsController.recommendsearch);

module.exports = router;
