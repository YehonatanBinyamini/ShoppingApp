// const Product = require("../models/product");
// const User = require("../models/user");

// exports.getAddProduct = (req, res, next) => {
//   //res.sendFile(path.join(rootDir, "views", "add-product.html"));

//   res.render("admin/edit-product", {
//     //path of the file
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//     buttonName: "Add Product",
//     editing: false,
//   });
// };

// exports.getProducts = (req, res, next) => {
//   Product.findAll()
//     .then((products) => {
//       res.render("admin/products", {
//         prods: products.filter((prod) => prod.userId == 1),
//         pageTitle: "Admin Products",
//         path: "/admin/products",
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const price = parseFloat(req.body.price);
//   const description = req.body.description;
//   const image = req.body.image;
//   //this code option1:
// req.user.createProduct({
//   title: title,
//   price: price,
//   description: description,
//   image: image,
  
// })
// //or option2:
//   // Product.create({
//   //   title: title,
//   //   price: price,
//   //   description: description,
//   //   image: image,
//   //   userId: user2.id,
//   // })
//     .then(() => {
//       res.redirect("/");
//       console.log("created product");
//     })
//     .catch((err) => console.log("err:", err));
// };

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (editMode != "true") {
//     return res.redirect("/");
//   }
//   const prodID = req.params.productId;
//   Product.findByPk(prodID)
//     .then((product) => {
//       if (!product) {
//         return res.redirect("/");
//       }
//       res.render("admin/edit-product", {
//         //path of the file
//         pageTitle: "Edit Product",
//         path: "/admin/edit-product",
//         editing: editMode == "true" ? true : false,
//         buttonName: "Update Product",
//         product: product,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.postEditProduct = (req, res, next) => {
//   const id = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = parseFloat(req.body.price);
//   const updatedDescription = req.body.description;
//   const updatedImage = req.body.image;
//   Product.findByPk(id)
//     .then((product) => {
//       product.title = updatedTitle;
//       product.price = updatedPrice;
//       product.description = updatedDescription;
//       product.image = updatedImage;
//       return product.save();
//     })
//     .then((result) => {
//       console.log("updated product");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
// };

// exports.postDeleteProduct = (req, res, next) => {
//   const id = req.body.productId;
//   Product.findByPk(id)
//     .then((product) => {
//       return product.destroy();
//     })
//     .then((result) => {
//       console.log("product destroyed");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log("err: ", err));
// };
