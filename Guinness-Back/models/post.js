const user = require("./user");

module.exports = (sequelize, Sequelize) => {
  class Post extends Sequelize.Model {
    //함수 입력하기
  }
  Post.init(
    {
      postNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      postTitle: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "post",
      timestamps: true,
      paranoid:true,
    }
  );
  return Post;
};
