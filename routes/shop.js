const path = require("path");

const express = require("express");

const shopControllers = require("../controllers/shop");

const router = express.Router();

router.get("/", shopControllers.getIndex);

router.get("/products", shopControllers.getProducts);
router.get("/products/:productID", shopControllers.getProduct); //dynamic route comes last to get priority to the other paths
router.get("/cart", shopControllers.getCart);
router.post("/cart", shopControllers.postCart);
router.post("/cart-delete-product", shopControllers.postDeleteProduct);
router.get("/orders", shopControllers.getOrders);
router.post("/create-order", shopControllers.postOrder);

module.exports = router;
