const Product = require("../models/product");


exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("admin/add-product", { pageTitle: "Add Product" });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, req.body.price, req.body.description, req.body.image)
    product.save();
    console.log(product);
    res.redirect("/");
  }

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop/products-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }