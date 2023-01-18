'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // teachers.belongsToMany(models.courses,{through:"courses-cname"});

      // define association here
    }
  }
  teachers.init({
    name: DataTypes.STRING,
    courses: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'teachers',
  });
  return teachers;
};