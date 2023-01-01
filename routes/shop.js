const path = require('path');

const express = require('express');

const shopControllers = require('../controllers/products');

const router = express.Router();

router.get('/', shopControllers.getIndex);

router.get('/products', shopControllers.getProducts);
router.get('/cart');
router.get('/checkout');
module.exports = router;
