const { isLoggedIn } = require("./middlewares");
const User = require("../models/user");

module.exports = {
following: async (req, res, next) => {  /* 팔로잉 기능 */
  try {
    const user = await User.findOne({
      where: { userID: req.user.userID }, 
    });
    if (user) {
      //사용자가 있는 경우, 팔로우할 사용자와 현재 로그인한 사용자의 관계 지정
      await user.addFollowing(parseInt(req.params.userID, 10));
      res.send("success");
    } else {
      //사용자가 없는 경우
      res.status(404).send("no user");
    }
  } catch (error) {
    console.error(error);
    next(error);
  };
}, 

follower: async (req, res, next) => { /* 팔로잉 */
  try {
    const ok = await Follow.create({
      followerID: req.body.followerID,
      followeeID: req.body.followeeID,
    });

    if (ok) return res.json("OK");
    else return res.json("FAIL");
  } catch (error) {
    console.error(error);
    return next(error);
  };
},

followDelete: async (req, res, next) => { /* 팔로우 해제 */
  try {
    const ok = await Follow.destroy({
      where: {
        followerID: req.query.followerID,
        followeeID: req.query.followeeID,
      },
    });

    if (ok) return res.json("OK");
    else return res.json("FAIL");
  } catch (error) {
    console.error(error);
    return next(error);
  }
},

ornot: async (req, res, next) => { /* 팔로우 여부 */
  try {
    const following = await Follow.findAll({
      where: { followerID: req.query.followerID, followeeID: req.query.followeeID },
    });
    var exUser;
    var xmlResult = '<?xml version="1.0" encoding="UTF-8"?>';
    xmlResult += "<follows>";
    for (var i = 0; i < following.length; i++) {
      exUser = await User.findOne({ where: { id: following[i].followerID } });
      xmlResult += "<follow><id>" + exUser.id + "</id>";
      xmlResult += "<nick>" + exUser.nick + "</nick>";
    }
    xmlResult += "</follows>";

    return res.json(xmlResult);
  } catch (error) {
    console.error(error);
    return next(error);
  }
},

followerCNT: async (req, res, next) => { /* 팔로워 수 세기 */
  try {
    const follower = await Follow.findAll({
      where: { followerID: req.query.followerID },
    });
    var exUser;
    var xmlResult = '<?xml version="1.0" encoding="UTF-8"?>';
    xmlResult += "<follows>";

    for (var i = 0; i < follower.length; i++) {
      exUser = await User.findOne({
        where: { id: follower[i].followeeID },
      });
      xmlResult += "<follow><id>" + exUser.id + "</id>";
      xmlResult += "<nick>" + exUser.nick + "</nick>";
    }
    xmlResult += "</follows>";
    return res.json(xmlResult);
  } catch (error) {
    console.error(error);
    return next(error);
  }
},

followingCNT: async (req, res, next) => { /* 팔로잉 수 세기 */
  try {
    const following = await Follow.findAll({
      where: { followeeID: req.query.followeeID },
    });
    var exUser;
    var xmlResult = '<?xml version="1.0" encoding="UTF-8"?>';
    xmlResult += "<follows>";

    for (var i = 0; i < following.length; i++) {
      exUser = await User.findOne({
        where: { id: following[i].followerID },
      });
      xmlResult += "<follow><id>" + exUser.id + "</id>";
      xmlResult += "<nick>" + exUser.nick + "</nick>";
    }
    xmlResult += "</follows>";
    return res.json(xmlResult);
  } catch (error) {
    console.error(error);
    return next(error);
  }
},
};