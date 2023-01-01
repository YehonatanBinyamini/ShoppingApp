const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("admin/add-product", {
      //path of the file
      pageTitle: "Add Product",
      path: "/admin/add-product",
    });
  };
  
exports.getAdminProducts = (req, res, next) => {
  res.render("admin/products", {
    pageTitle: "Products Management",
    path: "/admin/products",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.price,
    req.body.description,
    req.body.image
  );
  product.save();
  console.log(product);
  res.redirect("/");
};
