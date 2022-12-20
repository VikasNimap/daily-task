'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      task.belongsTo(models.Employees,{
        foreignKey:'Employees_id'
      })
      // define association here
    }
  }
  task.init({
    code: DataTypes.STRING,
    testing: DataTypes.STRING,
    live: DataTypes.STRING,
    Employees_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};