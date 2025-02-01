const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Order = sequelize.define('Order', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    sandwich: { type: DataTypes.STRING, allowNull: false },
    extra: { type: DataTypes.STRING, allowNull: true },
    total: { type: DataTypes.FLOAT, allowNull: false }
}, { timestamps: true });

module.exports = Order;
