const path = require('path');

const express = require('express');

const shopControllers = require('../controllers/products');

const router = express.Router();

router.get('/', shopControllers.getIndex);

router.get('/products', shopControllers.getProducts);
router.get('/products/:productID', shopControllers.getProduct) //dynamic route comes last to get priority to the other paths
router.get('/cart', shopControllers.getCart);
router.get('/checkout', shopControllers.getCheckout);
router.get('/orders', shopControllers.getOrders);

module.exports = router;
