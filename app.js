const express = require("express");

const app = express();
app.set("view engine", "ejs");

const adminRouts = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;

//const sequelize = require("./util/database");
//const rootDir = require('./util/path');
// const Product = require("./models/product");
// const User = require("./models/user");
// const Cart = require("./models/cart");
// const CartItem = require("./models/cart-item");
// const OrderItem = require("./models/order-item");
// const Order = require("./models/order");

app.use(express.urlencoded({ extended: true })); //solved the problem with body parser
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findByPk(1)
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use("/admin", adminRouts);
app.use(shopRoutes);

app.use(errorController.get404); //error page

mongoConnect(() => {
  //console.log(getDB());
  app.listen(3000);
});

//sequelize: relations and configurations:

// Product.belongsTo(User, {
//   constraints: true,
//   onDelete:
//     "CASCADE" /*means that in deleting of user, his products will be deleted also */,
// });
// User.hasMany(Product);
// User.hasOne(Cart);
// //Cart.belongsTo(User); //one direction is enough but without User.hasMany(..) it won't be the func createProduct..
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });
// //Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem });

// sequelize
//   // .sync({ force: true })
//   .sync()
//   .then((result) => {
//     return User.findByPk(1);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({ name: "john", email: "j@n.il" });
//     }
//     return user;
//   })
//   .then((user) => {
//     user.getCart().then((cart) => {
//       if (!cart) {
//         return user.createCart();
//       }
//       return cart;
//     });
//   })
//   .then((cart) => {
//     app.listen(3000);
//   })
//   .catch((err) => console.log(err));
