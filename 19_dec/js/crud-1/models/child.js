'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
module.exports = (sequelize, DataTypes) => {
  class child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      child.hasOne(models.bus,{foreignKey:"children_id"})
      // define association here
    }
  }
  child.init({
    name: DataTypes.STRING,
    class: DataTypes.INTEGER,
    contact: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'child',
  });
  return child;
};