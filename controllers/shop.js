const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/products-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodID = req.params.productID;
  Product.findByID(prodID, (product) => {
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      if (cart) {
        for (let i = 0; i < products.length; i++) {
          const productInCart = cart.products.find(
            (p) => p.id === products[i].id
          );
          if (productInCart) {
            cartProducts.push({ product: products[i], qty: productInCart.qty });
          }
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productID;
  Product.findByID(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/products");
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByID(prodId, (product) => {
    console.log(product)
    Cart.deleteProduct(prodId, product.price);
    res.redirect("/cart");
  });
}

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("/shop/checkout", {});
};
