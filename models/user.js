// const getDB = require("../util/database").getDB;
// const mongodb = require("mongodb");

// class User {
//   constructor(userName, email, cart, id) {
//     this.name = userName;
//     this.email = email;
//     this.cart = cart == null ? { items: [] } : cart;
//     this.id = id;
//   }

//   save() {
//     const db = getDB();
//     return db
//       .collection("users")
//       .insertOne(this)
//       .then(() => {})
//       .catch((err) => console.log(err));
//   }

//   findCartProductIndex(product) {
//     return this.cart.items.findIndex((cp) => {
//       return cp.productId.toString() === product._id.toString();
//     });
//   }

//   addToCart(product) {
//     const cartProductIndex = this.findCartProductIndex(product);
//     let updatedCartItems = [...this.cart.items];

//     if (cartProductIndex >= 0) {
//       updatedCartItems[cartProductIndex].quantity++;
//     } else {
//       updatedCartItems.push({
//         productId: new mongodb.ObjectId(product._id),
//         quantity: 1,
//       });
//     }
//     return this.updateTheCart(updatedCartItems);
//   }

//   getCart() {
//     const productsIDs = this.cart.items.map((item) => item.productId);
//     const db = getDB();
//     return db
//       .collection("products")
//       .find({ _id: { $in: productsIDs } })
//       .toArray()
//       .then((productsInCart) => {
//         const fetchingProducts = [];
//         productsInCart.forEach((product) => {
//           fetchingProducts.push({
//             data: product,
//             quantity:
//               this.cart.items[this.findCartProductIndex(product)].quantity,
//           });
//         });
//         return fetchingProducts;
//       });
//   }

//   deleteProductFromCart(productId) {
//     const deletedProductIndex = this.findCartProductIndex({ _id: productId });
//     const updatedCartItems = [...this.cart.items];
//     updatedCartItems.splice(deletedProductIndex, 1);
//     return this.updateTheCart(updatedCartItems);
//   }

//   updateTheCart(updatedCartItems) {
//     const updatedCart = { items: updatedCartItems };
//     const db = getDB();
//     return db
//       .collection("users")
//       .updateOne(
//         { _id: new mongodb.ObjectId(this.id) },
//         { $set: { cart: updatedCart } }
//       );
//   }

//   addOrder() {
//     const db = getDB();
//     return this.getCart().then((products) => {
//       const order = {
//         items: products,
//         user: {
//           _id: new mongodb.ObjectId(this.id)
//         },
//       };
//       return db
//         .collection("orders")
//         .insertOne(order)
//         .then((result) => {
//           this.cart = { items: [] };
//           return db
//             .collection("users")
//             .updateOne(
//               { _id: new mongodb.ObjectId(this.id) },
//               { $set: { cart: { items: [] } } }
//             );
//         });
//     });
//   }

//   getOrders() {
//     const db = getDB();
//     return db
//       .collection("orders")
//       .find({ user: { _id: this.id } })
//       .toArray();
//   }

//   static findById(id) {
//     const db = getDB();
//     return db.collection("users").findOne({ _id: new mongodb.ObjectId(id) });
//     // .then((user) => {
//     //     console.log("finById: ", user)
//     // })
//     // .catch((err) => console.log(err))
//   }
// }

// module.exports = User;
