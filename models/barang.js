'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barang.init({
    nama_barang: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    find_date: DataTypes.DATE,
    status: DataTypes.STRING,
    id_asisten: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Asisten',
        key: 'id'
      }
    },
    id_tempat: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tempat',
        key: 'id'
      }
    },
    lokasi_spesifik: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Barang',
  });
  return Barang;
};