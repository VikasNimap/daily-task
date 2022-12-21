'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      students.hasMany(models.course,{
        foreignKey:'students_id'
      })
      // define association here
    }
  }
  students.init({
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    class: DataTypes.INTEGER,
    contact: DataTypes.INTEGER,
    password: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};