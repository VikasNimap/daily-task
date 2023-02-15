'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsToMany(models.products,{through:"user_products",foreignKey:"user_id"});

      // define association here
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    locality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};