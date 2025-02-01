const { sequelize } = require('../database');
const Product = require('./product');
const Order = require('./order');

const syncDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("🔥 Database connected!");

        await sequelize.sync();

        console.log("Database & tables are ready!");
    } catch (error) {
        console.error("Database sync error:", error);
    }
};

module.exports = { Product, Order, syncDB };
