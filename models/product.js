const db = require("../util/database");
const Cart = require("./cart");
const defaultImage =
  "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png";

module.exports = class Product {
  constructor(id, title, price, description, image) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    image ? (this.image = image) : (this.image = defaultImage);
  }

  save() {
    return db.execute(
      "INSERT INTO products (title, price, description, image) VALUES (?, ?, ?, ?)",
      [this.title, this.price, this.description, this.image]
    );
  }

  static deleteByID(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findByID(ID) {
    return db.execute("SELECT * FROM products WHERE id=?", [ID]);
  }
};
