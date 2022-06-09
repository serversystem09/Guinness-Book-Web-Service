const user = require("./user");

module.exports = (sequelize, Sequelize) => {
  class Post extends Sequelize.Model {
    //함수 입력하기
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
      likeNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0
        },
      },
      photo: {
        type: Sequelize.BLOB("long"),
            // 우리는 프론트에서 보내준 이미지를 Blob 타입으로 변환하여 서버에 저장합니다.
         allowNull: false
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
