const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));

  res.render("admin/edit-product", {
    //path of the file
    pageTitle: "Add Product",
    path: "/admin/add-product",
    buttonName: "Add Product",
    editing: false,
  });
};

exports.getProducts = (req, res, next) => {
  //const products = Product.fetchAll((products) => {
  res.render("admin/products", {
    prods: [],
    pageTitle: "Admin Products",
    path: "/admin/products",
  });
  // });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = parseFloat(req.body.price);
  console.log(price, "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ add product");
  const description = req.body.description;
  const image = req.body.image;
  Product.create({
    title: title,
    price: price,
    description: description,
    image: image,
  })
    .then(() => {
      console.log("created product");
    })
    .catch((err) => console.log("err:", err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (editMode != "true") {
    return res.redirect("/");
  }
  const prodID = req.params.productId;
  Product.findByID(prodID, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      //path of the file
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode == "true" ? true : false,
      buttonName: "Update Product",
      product: product,
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const price = parseFloat(req.body.price);
  console.log(price, "$$$$$$$$$$$$$$$$$$$$$$$$$$$got to the edit-product controller");

};
//   const id = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedDescription = req.body.description;
//   const updatedImage = req.body.image;
//   const updateProduct = new Product(
//     id,
//     updatedTitle,
//     updatedPrice,
//     updatedDescription,
//     updatedImage
//   );
//   updateProduct.save();
//   res.redirect("/admin/products");
// };

exports.postDeleteProduct = (req, res, next) => {
  const id = req.body.productId;
  Product.deleteByID(id);
  res.redirect("/admin/products");
};
