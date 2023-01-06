const express = require("express");
const router = express.Router();
const path = require("path");
//const rootDir = require("../util/path");
const adminControllers = require("../controllers/admin");

router.get("/add-product", adminControllers.getAddProduct);

router.get("/products", adminControllers.getProducts);

router.post("/add-product", adminControllers.postAddProduct);

router.get("/edit-product/:productId", adminControllers.getEditProduct)

module.exports = router;
