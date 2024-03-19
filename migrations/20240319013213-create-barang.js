'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Barangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_barang: {
        type: Sequelize.STRING
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      find_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      id_asisten: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Asistens',
          key: 'id'
        }
      },
      id_tempat: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tempats',
          key: 'id'
        }
      },
      lokasi_spesifik: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Barangs');
  }
};