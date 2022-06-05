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
db.User.belongsToMany(db.Post,{through:'PostLike'});
db.Post.belongsToMany(db.User,{through:'PostLike', as:'PostLiker'});

db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);
//좋아요 누르기 기능
db.User.belongsToMany(db.Comment,{through:'CommentLike'});
db.Comment.belongsToMany(db.User,{through:'CommentLike', as:'CommentLiker'});

db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);

db.Event.hasMany(db.Post);
db.Post.belongsTo(db.Event);
//event랑 user도

db.Category.hasMany(db.Event);
db.Event.belongsTo(db.Category);

module.exports = db;