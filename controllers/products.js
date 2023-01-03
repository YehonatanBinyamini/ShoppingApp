const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop/products-list", {
    prods: products,
    pageTitle: "All Products",
    path: "/products",
  });
};

exports.getProduct = (req, res, next) => {
  const prodID = req.params.productID;
  const product = Product.findByID(prodID);
  console.log("ddddd "+product.id)
  res.redirect('./');
}

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop/index", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Orders'
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('/shop/checkout', {

  }); 
}
