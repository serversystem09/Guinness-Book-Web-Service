module.exports = (sequelize, Sequelize) => {
  class Category extends Sequelize.Model {
    //함수 입력하기
  }
  Category.init(
    {
      categoryNum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      categoryName: {
        type: Sequelize.STRING(10),
      },
    },
    {
      sequelize,
      modelName: "category",
      timestamps: true,
      paranoid:true,
    }
  );
  return Category;
};