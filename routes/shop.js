const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const adminData = require('./admin')

router.get("/", (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "shop.html"));


  const products = adminData.products;
  //render will use the default templating engin
  res.render('shop', {prods: products, docTitle: 'Shop'}); 
});

module.exports = router;
