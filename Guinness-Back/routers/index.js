const router = require("express").Router();

const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const commentRoutes = require("./commentRoutes");
const errorRoutes = require("./errorRoutes");
const eventRoutes = require("./eventRoutes");
const followRoutes = require("./followRoutes");
const postRoutes = require("./postRoutes");
const apiRoutes = require("./apiRoutes");

router.use("/users", userRoutes);
router.use("/categorys", categoryRoutes);
router.use("/comments", commentRoutes);
router.use("/errors", errorRoutes);
router.use("/events", eventRoutes);
router.use("/follows", followRoutes);
router.use("/posts", postRoutes);
router.use("/apis", apiRoutes);

module.exports = router;
