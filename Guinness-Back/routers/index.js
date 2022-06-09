const router = require("express").Router();

const userRoutes = require("./userRoutes");
const apiRoutes = require("./apiRoutes");
const categoryRoutes = require("./categoryRoutes");
const commentRoutes = require("./commentRoutes");
const errorRoutes = require("./errorRoutes");
const eventRoutes = require("./eventRoutes");
const followRoutes = require("./followRoutes");
const postRoutes = require("./postRoutes");
const recommendRoutes = require("./recommendRoutes");

router.use("/users", userRoutes);
router.use("/apis", apiRoutes);
router.use("/categorys", categoryRoutes);
router.use("/comments", commentRoutes);
router.use("/errors", errorRoutes);
router.use("/events", eventRoutes);
router.use("/follows", followRoutes);
router.use("/posts", postRoutes);
router.use("/recommends", recommendRoutes);

module.exports = router;
