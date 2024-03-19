'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tempat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tempat.init({
    nama_tempat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tempat',
  });
  return Tempat;
};