'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_upload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  image_upload.init({
    name: DataTypes.STRING,
    image: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'image_upload',
    paranoid:true
  });
  return image_upload;
};