const fs = require("fs");
const path = require("path");

const products = [];
const defaultImage =
  "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png";
module.exports = class Product {
  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    image ? (this.image = image) : (this.image = defaultImage);
  }

  save() {
    this.id = Math.floor(Math.random() * 100000000).toString();
    products.push(this);
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
        let products = [];
        if (!err){
            products = JSON.parse(fileContent);
        }
        products.push(this);
        fs.writeFile(p, Json.stringify(products), err => {
            console.log(err);
        })
    });
  }

  static fetchAll() {
    fs.readFile(p, (err, fileContent) => {
        if (err){
            return [];
        }
        return JSON.parse(fileContent);
    });
  }

  static findByID(ID) {
    return products.find((p) => p.id === ID);
  }
};
