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
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      userAmount: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          min: 0
        },
      },
      content: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "event",
      timestamps: true,
      paranoid:true,
    }
  );
  return Event;
};
