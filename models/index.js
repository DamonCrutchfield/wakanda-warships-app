const { Sequelize, DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')


class Aircrafts extends Model { }

Aircrafts.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    role: DataTypes.STRING,
    model: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = { Aircrafts };