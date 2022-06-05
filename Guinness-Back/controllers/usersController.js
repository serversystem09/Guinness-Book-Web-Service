const { isLoggedIn } = require("./middlewares");
const User = require("../models/user");
const passport = require("passport");
//const Op = Sequelize.Op; //회원 검색에서 사용

module.exports = {
  index: (req, res, next) => {
    User.find()
      .then((users) => {
        res.locals.users = users;
        next();
      })
      .catch((error) => {
        console.log(`Error fetching users: ${error.message}`);
        next(error);
      });
  },

  userSearch: async (req, res, next) => {
    /* 회원검색 */
    try {
      const exUser = await User.findAll({
        where: { id: { [Op.like]: "%" + req.query.id + "%" } },
      });

      var xmlResult = '<?xml version="1.0" encoding="UTF-8"?>';
      xmlResult += "<members>";
      for (var i = 0; i < exUser.length; i++) {
        xmlResult += "<member><id>" + exUser[i].id + "</id>";
        xmlResult += "<nick>" + exUser[i].nick + "</nick>";
      }
      xmlResult += "</members>";

      return res.json(xmlResult);
    } catch (error) {
      console.error(error);
      return next(error);
    }
  },
};
