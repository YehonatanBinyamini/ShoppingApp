const express = require("express");
const router = express.Router();
const path = require("path");
//const rootDir = require("../util/path");
const productControllers = require("../controllers/products");

router.get("/add-product", productControllers.getAddProduct);

router.get("/products", productControllers.getAdminProducts);

router.post("/add-product", productControllers.postAddProduct);

module.exports = router;
