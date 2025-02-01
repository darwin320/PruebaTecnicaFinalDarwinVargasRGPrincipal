const orderService = require('../services/ordersService');

const createOrder = async (req, res) => {
    try {
        const { sandwich, extra } = req.body;
        const order = await orderService.createOrder(sandwich, extra);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getOrders = async (req, res) => {
    try {
        console.log("Fetching orders from the database...");
        const orders = await orderService.getOrders();
        console.log(" Orders retrieved:", orders);
        res.json(orders);
    } catch (error) {
        console.error("Error retrieving orders:", error);
        res.status(500).json({ error: "Error retrieving orders", details: error.message });
    }
};


const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { sandwich, extra } = req.body;
        const updatedOrder = await orderService.updateOrder(id, sandwich, extra);
        if (!updatedOrder) return res.status(404).json({ error: "Order not found" });
        res.json(updatedOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await orderService.deleteOrder(id);
        if (!deletedOrder) return res.status(404).json({ error: "Order not found" });
        res.json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = { createOrder, getOrders, updateOrder, deleteOrder };
