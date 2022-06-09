module.exports = (sequelize, Sequelize) => {
  class Comment extends Sequelize.Model {
      //함수 입력하기
  }
  Comment.init(
      {
          commentNum: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
          },
          content: {
              type: Sequelize.STRING(400),
              allowNull: false,
          },
      },
      {
          sequelize,
          modelName: "comment",
          timestamps: true,
          paranoid: true,
      }
  );
  return Comment;
};