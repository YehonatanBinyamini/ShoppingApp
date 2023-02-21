const getDB = require("../util/database").getDB;
const mongodb = require("mongodb")

class Product {
  constructor(title, price, description, image, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDB();
    let dbOp;
    if (this._id){
        dbOp = db
        .collection("products")
        .updateOne({_id: this._id}, { $set: this})
    } else {
        dbOp = db
      .collection("products")
      .insertOne(this)
    }
    return dbOp
      .then((result) => {
      })
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDB();
    return db.collection("products").find().toArray()
    .then(products => {
        return products;
    })
    .catch((err) => console.log(err));
  }

  static findById(prodId) {
    const db = getDB();
    return db.collection("products").find({_id: new mongodb.ObjectId(prodId)}).next()
    .then(product => {
        return product;
    })
    .catch((err) => console.log(err));
  }

  static deleteById(prodId){
    const db = getDB();
    return db.collection('products').deleteOne({_id: new mongodb.ObjectId(prodId)})
    .then(()=> {
    })
    .catch((err) => console.log(err));
  }
}

module.exports = Product;
