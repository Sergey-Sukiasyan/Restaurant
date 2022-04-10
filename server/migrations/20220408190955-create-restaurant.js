'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(64)
      },
      avatar: {
        type: Sequelize.STRING(64),
        allowNull: true
      },
      address: {
        type: Sequelize.STRING(64)
      },
      info: {
        type: Sequelize.STRING
      },
      tariff: {
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      longitude: {
        type: Sequelize.STRING(64),
        allowNull: false
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
    await queryInterface.dropTable('Restaurants');
  }
};