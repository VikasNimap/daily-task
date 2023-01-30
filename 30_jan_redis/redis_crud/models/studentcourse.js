'use strict';
const Students = require('./students');
const Courses = require('./courses');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Model.Students.belongsToMany(Courses,{through:'studentCourse'})
      // Model.Courses.belongsToMany(Students,{through:'studentCourse'})
      // define association here
    }
  }
  studentCourse.init({
    students_id: DataTypes.INTEGER,
    courses_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'studentCourse',
  });
  return studentCourse;
};