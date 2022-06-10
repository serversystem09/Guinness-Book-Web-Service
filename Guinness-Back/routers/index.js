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

//router.use("/users", userRoutes);
router.use("/apis", apiRoutes);
//router.use("/categorys", categoryRoutes);
//router.use("/comments", commentRoutes);
router.use("/errors", errorRoutes);
//router.use("/events", eventRoutes);
router.use("/follows", followRoutes);
router.use("/posts", postRoutes);
//router.use("/recommends", recommendRoutes);

module.exports = router;


/*

//이미지 업로드 관련 multer
const multer = require("multer");
const path = require("path");

const storage = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/images/");
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname); // 파일 확장자
      const timestamp = new Date().getTime().valueOf(); // 현재 시간
      // 새 파일명(기존파일명 + 시간 + 확장자)
      const filename = path.basename(file.originalname, ext) + timestamp + ext;
      cb(null, filename);
    },
  })
});
  
  const upload = multer({storage: storage});





  
// app.post('/up', 
//upload.fields([{ name: 'img' }, { name: 'photos' }]), (req, res) => {
//   console.log(req.file); 
// });

//이미지 업로드 끝


*/