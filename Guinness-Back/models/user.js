module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static async findByPkAndUpdate(userID, params) {
      try {
        let user = await User.findByPk(userID);
        if(user) {
          user = await User.update(params, {
            where: {userID: userID}
          });
        }
        return user;
      } catch(err) {
        console.log(err);
      }
    }
    static async findByPkAndRemove(userID) {
      try {
        let user = await User.findByPk(userID);
        if(user) {
          user = await User.destroy({
            where: {userID: userID}
          });
        }
        return user;
      } catch(err) {
        console.log(err);
      }
    }
    getInfo() {
      return `ID: ${this.userID} Email: ${this.email}`;
    }
  };

  User.init(
    {
      userID: {
        type: Sequelize.varchar(20),
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      /*
      pw: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      */
      nickName: {
        type: Sequelize.varchar(20),
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.varchar(40),
        unique: true,
      },
      ranking: {
        type: Sequelize.varchar(10),
        allowNull: false,
      },
      birth: {
        type: Sequelize.datetime(),
      },
    },
    {
      hooks: {
        //유효성 체크 부분 입력
      },
      sequelize,
      modelName: "user",
      timestamps: true,
    }
  );
  return User;
};
