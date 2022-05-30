const router = require("express").Router();
const categorysController = require("../controllers/categorysController");
const { isLoggedIn } = require("../controllers/middlewares");

router.get("", categorysController.index, categorysController.indexView);
router.get("/new", categorysController.new);
router.post(
  "/create",
  categorysController.create,
  categorysController.redirectView
);
router.get("/:id/edit", categorysController.edit);
router.put(
  "/:id/update",
  categorysController.update,
  categorysController.redirectView
);
router.get("/:id", categorysController.show, categorysController.showView);
router.delete(
  "/:id/delete",
  categorysController.delete,
  categorysController.redirectView
);

module.exports = router;
