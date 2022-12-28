exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("add-product", { pageTitle: "Add Product" });
}
const products = [];

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    console.log(products);
    res.redirect("/");
  }

exports.getProducts = (req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }