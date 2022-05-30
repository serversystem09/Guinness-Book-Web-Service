const category = require("./category");
const user = require("./user");

module.exports = (sequelize, Sequelize) => {
  class Event extends Sequelize.Model {
    //함수 입력하기
  }
  Event.init(
    {
      eventID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      eventName: {
        type: Sequelize.varchar(20),
        allowNull: false,
        unique: true,
      },
      categoryNum: {
        type: Sequelize.INTEGER,
        references: {
          model: category,
          key: "categoryNum",
        },
      },
      userAmount: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          min: 0
        },
      },
      content: {
        type: Sequelize.varchar(10000),
        allowNull: true,
      },
      createrID: {
        type: Sequelize.varchar(20),
        allowNull: false,
        references: {
          model: user,
          key: "userID",
        },
      },
      createDate: {
        type: Sequelize.datetime(),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "event",
      timestamps: true,
    }
  );
  return Event;
};
