const Event = require("./event")(sequelize, Sequelize);
const Comment = require("./comment")(sequelize, Sequelize);
const User = require("./user")(sequelize, Sequelize);

module.exports = (sequelize, Sequelize) => {
      //commentOn삭제
  class Post extends Sequelize.Model {
  }
  Post.init(
    {
      postNum: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
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
      photo: {
        type: DataTypes.BLOB("long"),
          // 우리는 프론트에서 보내준 이미지를 Blob 타입으로 변환하여 서버에 저장합니다.
          allowNull: false
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
      writeDate: {
        type: Sequelize.datetime(),
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
