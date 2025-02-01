const express = require('express');
const router = express.Router();
const { createOrder, getOrders, updateOrder, deleteOrder } = require('../controllers/ordersController'); 

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of all orders.
 */
router.get('/orders', getOrders);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sandwich:
 *                 type: string
 *                 description: The name of the sandwich.
 *                 example: "X Burger"
 *               extra:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of optional extras.
 *                 example: ["Fries", "Soft drink"]
 *     responses:
 *       201:
 *         description: Order created successfully.
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               sandwich: "X Burger"
 *               extra: ["Fries", "Soft drink"]
 *               total: 7.20
 *       400:
 *         description: Invalid request.
 */
router.post('/orders', createOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *   put:
 *     summary: Update an existing order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the order to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sandwich:
 *                 type: string
 *                 description: The name of the sandwich.
 *               extra:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of optional extras.
 *     responses:
 *       200:
 *         description: Order updated successfully.
 *       400:
 *         description: Invalid request.
 *       404:
 *         description: Order not found.
 */
router.put('/orders/:id', updateOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Delete an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the order to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Order deleted successfully.
 *       404:
 *         description: Order not found.
 */
router.delete('/orders/:id', deleteOrder);

module.exports = router;
