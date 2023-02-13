'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_products.hasMany(models.users, { foreignKey: "id" });
      user_products.hasMany(models.products, { foreignKey: "id" });
      // define association here
    }
  }
  user_products.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_products',
  });
  return user_products;
};