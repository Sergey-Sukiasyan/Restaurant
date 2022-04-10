'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate(models) {
      Restaurant.hasMany(models.Feedback, {
        as: 'feedback',
        foreignKey: 'restaurant_id',
      });
    }
  }
  Restaurant.init({
    name: DataTypes.STRING(64),
    avatar: DataTypes.TEXT,
    address: DataTypes.STRING(64),
    info: DataTypes.TEXT,
    tariff: DataTypes.INTEGER,
    latitude: DataTypes.STRING(64),
    longitude: DataTypes.STRING(64)
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};