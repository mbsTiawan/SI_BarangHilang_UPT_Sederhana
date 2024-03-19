'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asisten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Asisten.init({
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    kontak: DataTypes.STRING,
    join_date: DataTypes.DATE,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Asisten',
  });
  return Asisten;
};