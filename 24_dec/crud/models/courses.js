'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      courses.belongsTo(models.students,{
        foreignKey: 'students_id'
      })
      // define association here
    }
  }
  courses.init({
    cname: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    students_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'courses',
  });
  return courses;
};