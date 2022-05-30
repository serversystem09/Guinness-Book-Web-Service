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
      postNum: {
        type: Sequelize.INTEGER,
        references: {
          model: Post,
          key: "postNum",
        },
      },
      eventID: {
        type: Sequelize.INTEGER,
        references: {
          model: Event,
          key: "eventID",
        },
      },
      createDate: {
        type: Sequelize.datetime(),
      },
      likeNum: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0
        },
      },
      userID: {
        type: Sequelize.varchar(20),
        references: {
          model: User,
          key: "userID",
        },
      },
      content: {
        type: Sequelize.varchar(400),
      },
    },
    {
      sequelize,
      modelName: "comment",
      timestamps: true,
    }
  );
  return Comment;
};
