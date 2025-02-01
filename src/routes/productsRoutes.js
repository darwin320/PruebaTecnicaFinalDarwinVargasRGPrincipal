const express = require('express');
const router = express.Router();
const { products, extras } = require('../models/product');

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all available products (sandwiches and extras)
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all sandwiches and extras.
 *         content:
 *           application/json:
 *             example:
 *               - name: "X Burger"
 *                 price: 5.00
 *               - name: "X Egg"
 *                 price: 4.50
 *               - name: "X Bacon"
 *                 price: 7.00
 *               - name: "Fries"
 *                 price: 2.00
 *               - name: "Soft drink"
 *                 price: 2.50
 */
router.get('/products', (req, res) => res.json([...products, ...extras]));

/**
 * @swagger
 * /api/products/sandwiches:
 *   get:
 *     summary: Get all sandwiches
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of sandwiches.
 *         content:
 *           application/json:
 *             example:
 *               - name: "X Burger"
 *                 price: 5.00
 *               - name: "X Egg"
 *                 price: 4.50
 *               - name: "X Bacon"
 *                 price: 7.00
 */
router.get('/products/sandwiches', (req, res) => res.json(products));

/**
 * @swagger
 * /api/products/extras:
 *   get:
 *     summary: Get all extras
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of extras.
 *         content:
 *           application/json:
 *             example:
 *               - name: "Fries"
 *                 price: 2.00
 *               - name: "Soft drink"
 *                 price: 2.50
 */
router.get('/products/extras', (req, res) => res.json(extras));

module.exports = router;
