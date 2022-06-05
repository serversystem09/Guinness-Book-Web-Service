module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static async findByPkAndUpdate(userID, params) {
      try {
        let user = await User.findByPk(userID);
        if (user) {
          user = await User.update(params, {
            where: { userID: userID }
          });
        }
        return user;
      } catch (err) {
        console.log(err);
      }
    }
    static async findByPkAndRemove(userID) {
      try {
        let user = await User.findByPk(userID);
        if (user) {
          user = await User.destroy({
            where: { userID: userID }
          });
        }
        return user;
      } catch (err) {
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
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      pw: {
        type: Sequelize.STRING(20),
      },
      nickName: {
        type: Sequelize.STRING(20),
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
      },
      ranking: {
        type: Sequelize.STRING(10),
      },
      birth: {
        type: Sequelize.DATE,
      },
    },
    {
      hooks: {
        //유효성 체크 부분 입력
      },
      sequelize,
      modelName: "user",
      timestamps: true,
      paranoid:true,
    }
  );
  return User;
};