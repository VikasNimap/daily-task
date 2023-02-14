'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsToMany(models.users,{through:"user_products",foreignKey:"product_id"});
      // define association here
    }
  }
  products.init({
    pname: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
    availablity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};