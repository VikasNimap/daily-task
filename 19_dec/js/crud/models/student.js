'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.hasMany(models.teacher,{
        foreignKey:'assigned_to'
      })
      // define association here
    }
  }
  student.init({
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    class: DataTypes.INTEGER,
    login_id: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};