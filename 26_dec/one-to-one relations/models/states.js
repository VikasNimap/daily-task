'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class states extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      states.hasOne(models.capitals,{
        foreignKey:'states_id'
      })
      // define association here
    }
  }
  states.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'states',
  });
  return states;
};