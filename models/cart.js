const fs = require("fs");
const { parse } = require("path");
const path = require("path");
const Product = require("./product");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      console.log("start", cart.totalPrice);
      cart.totalPrice = cart.totalPrice + Number(productPrice);
      console.log("middle", cart.totalPrice);
      const tempPrice = parseFloat(cart.totalPrice).toFixed(2);
      cart.totalPrice = parseFloat(tempPrice)
      console.log("end", cart.totalPrice);
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        //console.log("productPrice", cart.totalPrice);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        console.log("There is no cart!");
        return;
      }
      const cart = JSON.parse(fileContent); //{ products: [], totalPrice: 0 };
      const deletedProduct = cart.products.find((p) => p.id === id);
      if (deletedProduct) {
        const productQty = deletedProduct.qty;
        cart.totalPrice = cart.totalPrice - productQty * productPrice;
        cart.products = cart.products.filter((p) => p.id !== id);

        fs.writeFile(p, JSON.stringify(cart), (err) => {
          if (!err) console.log("cart delete product - no error");
          else console.log(err);
        });
      }
      //}
      //const updatedCart
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb(null);
      } else {
        const cart = JSON.parse(fileContent);
        cb(cart);
      }
    });
  }

  // static DeleteProduct(id, productPrice) {
  //   fs.readFile(p, (err, fileContent) => {
  //     if (!err) {
  //       cart = JSON.parse(fileContent);
  //     }
  //     const deletedProduct = cart.products.find(p => p.id === id)
  //     const updatedTotalPrice = cart.totalPrice - deletedProduct.qty*productPrice;
  //     const updatedProducts = cart.products.filter(p => p.id !== id)
  //     const updatedCart = {products: updatedProducts, totalPrice: updatedTotalPrice}
  //     fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
  //       if (!err) console.log("cart delete product - no error");
  //       else console.log(err);
  //     });
  //   });
  // }
};
