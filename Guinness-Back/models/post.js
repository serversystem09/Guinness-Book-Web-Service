module.exports = (sequelize, Sequelize) => {
  const Event = require("./event")(sequelize, Sequelize);
  const Comment = require("./comment")(sequelize, Sequelize);
  const User = require("./user")(sequelize, Sequelize);

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
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING(10000),
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
         type: Sequelize.BLOB("long"),
           // 우리는 프론트에서 보내준 이미지를 Blob 타입으로 변환하여 서버에 저장합니다.
           allowNull: false
         },
      writerID: {
        type: Sequelize.STRING(20),
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"), //이렇게 수정!
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
