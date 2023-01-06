const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("admin/edit-product", {
    //path of the file
    pageTitle: "Add Product",
    path: "/admin/add-product",
    buttonName: "Add Product",
  });
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
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
  res.redirect("/products");
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (editMode != "true"){
        console.log("no edit true")
        return res.redirect('/');
    }
    const prodID = req.params.productId;
    Product.findByID(prodID, product => {
        if (!product){
            return res.redirect('/');
        }
        res.render("admin/edit-product", {
          //path of the file
          pageTitle: "Edit Product",
          path: "/admin/edit-product",
          buttonName: "Update Product",
          product: product,
        });
    });
  };