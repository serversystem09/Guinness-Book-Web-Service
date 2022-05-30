module.exports = (sequelize, Sequelize) => {
  class Recommend extends Sequelize.Model {
    //함수 입력하기
  }
  Recommend.init(
    {
      recommendNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      eventID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Event,
          key: "eventID",
        },
      },
      postNum: {
        type: Sequelize.INTEGER,
        references: {
          model: Post,
          key: "postNum",
        },
      },
    },
    {
      sequelize,
      modelName: "recommend",
      timestamps: true,
    }
  );
  return Recommend;
};
