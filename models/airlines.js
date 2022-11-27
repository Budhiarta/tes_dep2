'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airlines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airlines.init({
    Airline_Code: DataTypes.STRING,
    Company__Name: DataTypes.STRING,
    Flying_Rute: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airlines',
  });
  return Airlines;
};