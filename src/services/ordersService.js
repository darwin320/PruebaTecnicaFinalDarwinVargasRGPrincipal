const { Order } = require('../models');
const { products, extras } = require('../models/product');

const calculateTotal = (sandwich, extra) => {
    if (!products || !extras) {
        throw new Error("Products or extras are not loaded correctly");
    }

    const sandwichItem = products.find(p => p.name === sandwich);
    if (!sandwichItem) throw new Error("Invalid sandwich selected");

    let total = sandwichItem.price;
    let selectedExtras = [];

    for (let item of extra) {
        const extraItem = extras.find(e => e.name === item);
        if (!extraItem) throw new Error(`Invalid extra: ${item}`);
        selectedExtras.push(extraItem);
        total += extraItem.price;
    }


    if (selectedExtras.length === 2) {
        total *= 0.8;  
    } else if (selectedExtras.includes(extras.find(e => e.name === "Soft drink"))) {
        total *= 0.85; 
    } else if (selectedExtras.includes(extras.find(e => e.name === "Fries"))) {
        total *= 0.9; 
    }

    return parseFloat(total.toFixed(2));
};

const createOrder = async (sandwich, extra) => {
    if (new Set([sandwich, ...extra]).size !== extra.length + 1) {
        throw new Error("Cannot order more than one of each item");
    }

    const total = calculateTotal(sandwich, extra);
    const newOrder = await Order.create({ sandwich, extra: extra.join(','), total });
    return newOrder;
};

const getOrders = async () => {
    try {
        const orders = await Order.findAll();
        return orders;
    } catch (error) {
        throw new Error("Database query failed: " + error.message);
    }
};

const deleteOrder = async (id) => { 
    const order = await Order.findByPk(id);
    if (!order) return null;

    await order.destroy();
    return order;
};

const updateOrder = async (id, sandwich, extra) => {
    const order = await Order.findByPk(id);
    if (!order) return null;

    order.sandwich = sandwich;
    order.extra = extra.join(',');
    order.total = calculateTotal(sandwich, extra);
    
    await order.save();
    return order;
};

module.exports = { createOrder, calculateTotal, getOrders, deleteOrder, updateOrder };
