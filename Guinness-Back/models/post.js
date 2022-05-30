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
        type: Sequelize.varchar(40),
        allowNull: false,
      },
      content: {
        type: Sequelize.varchar(10000),
        allowNull: false,
      },
      eventID: {
        type: Sequelize.INTEGER,
        references: {
          model: Event,
          key: "eventID",
        },
      },
      writerID: {
        type: Sequelize.varchar(20),
        references: {
          model: User,
          key: "userID",
        },
      },
      likeNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0
        },
      },
      commentON: {
        type: Sequelize.tinyint(1),
      },
      writeDate: {
        type: Sequelize.datetime(),
      },
    },
    {
      sequelize,
      modelName: "post",
      timestamps: true,
    }
  );
  return Post;
};
