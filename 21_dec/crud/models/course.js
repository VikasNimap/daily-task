'use strict';
const {
  Model
} = require('sequelize');
const students = require('./students');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      course.belongsTo(models.students,{
        foreignKey:'students_id'
      })
      // define association here
    }
  }
  course.init({
    cname: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    Students_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};