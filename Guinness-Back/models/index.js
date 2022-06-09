const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Category = require("./category")(sequelize, Sequelize);
db.Event = require("./event")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);

db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
//좋아요 누르기 기능
db.User.belongsToMany(db.Post,{through:'postLike'});
db.Post.belongsToMany(db.User,{through:'postLike', as:'postLiker'});

db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);
//좋아요 누르기 기능
db.User.belongsToMany(db.Comment,{through:'commentLike'});
db.Comment.belongsToMany(db.User,{through:'commentLike', as:'commentLiker'});

db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);

db.Event.hasMany(db.Post);
db.Post.belongsTo(db.Event);
//event랑 user도

db.Category.hasMany(db.Event);
db.Event.belongsTo(db.Category);

//as: 시퀄라이즈가 JOIN 작업 시 사용하는 이름. as에 등록한 이름을 바탕으로 시퀄라이즈는 
//getFollowers, getFollowings, addFollower, addFollowing 등의 메서드를 자동으로 추가함
db.User.belongsToMany(db.User, {
    foreignKey: "followingID",
    as: "followers",
    through: "follow",
  });
  db.User.belongsToMany(db.User, {
    foreignKey: "followerID",
    as: "followings",
    through: "follow",
  });
  
module.exports = db;