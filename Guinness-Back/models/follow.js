module.exports = (sequelize, Sequelize) => {
    class Follow extends Sequelize.Model {
      //함수 입력하기
    }
    Follow.init(
      {
        followerID: {
          type: Sequelize.varchar(20),
          allowNull: false,
          primaryKey: true,
          references: {
            model: User,
            key: "userID",
          },
        },
        followeeID: {
          type: Sequelize.varchar(20),
          allowNull: false,
          primaryKey: true,
          references: {
            model: User,
            key: "userID",
          },
        },
      },
      {
        sequelize,
        modelName: "follow",
        timestamps: true,
      }
    );
    return Follow;
  };
  