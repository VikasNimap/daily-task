'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employees.hasMany(models.task,{
        foreignKey: 'Employees_id'
      })
      // define association here
    }
  }
  Employees.init({
    Emp_name: DataTypes.STRING,
    Emp_dept: DataTypes.STRING,
    Emp_experience: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};