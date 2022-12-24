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
      students.hasMany(models.courses,{
        foreignKey: "students_id"
      })
      // define association here
    }
  }
  students.init({
    name: DataTypes.STRING,
    class: DataTypes.INTEGER,
    email: DataTypes.STRING,
    // courses: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};