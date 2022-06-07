const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


//모델과 연결
db.User = require("./user.js")(sequelize, Sequelize);
db.Post = require("./post.js")(sequelize, Sequelize);
db.Comment = require("./comment.js")(sequelize, Sequelize);
db.Follow = require("./follow.js")(sequelize, Sequelize);
db.Recommend = require("./recommend.js")(sequelize, Sequelize);
db.Event = require("./event.js")(sequelize, Sequelize);
db.Category = require("./category.js")(sequelize, Sequelize);


//모델 관계 설정
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);

db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);

db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);







// 이미지 받았을 때 필터링
const imageFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("Only image files are allowed!"));
  }
  cb(null, true);
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 서버에 저장될 위치
    cb(null, __basedir + "/app/static/assets/");
  },
  filename: (req, file, cb) => {
    // 서버에 저장될 때 파일 이름
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  }
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter }).single(
  // 프론트에서 넘겨울 params key 값, 오른쪽 같이 넘겨줘야함-> {photo: binary}
  "photo"
);
module.exports = uploadFile;




//팔로잉-팔로워 다대다 관계이므로 중간(관계) 테이블(Follow) 생성됨
db.User.belongsToMany(db.User, {
  foreignKey: "followeeID",
  as: "Followers",
  through: "Follow",
});
db.User.belongsToMany(db.User, {
  foreignKey: "followerID",
  as: "Followings",
  through: "Follow",
});

/*
게시글 좋아요 누르기 기능..?
db.User.belongsToMany(db.Post,{through:'Like'});
db.Post.belongsToMany(db.User,{through:'Like', as:'Liker'});
*/

module.exports = db;
