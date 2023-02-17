class Product {
    constructor(id, title, price, description, image) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      image ? (this.image = image) : (this.image = defaultImage);
    }
  
    save() {
      getProductsFromFile((products) => {
        if (this.id) {
          const existingProductIndex = products.findIndex(
            (prod) => prod.id === this.id
          );
          const updatedProducts = [...products];
          updatedProducts[existingProductIndex] = this;
          fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
            console.log(err);
          });
        } else {
          this.id = Math.floor(Math.random() * 100000000).toString();
          //products.push(this);
          products.push(this);
          fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log(err);
          });
        }
      });
    }
  
    static deleteByID(id) {
      getProductsFromFile((products) => {
        //const deletedProductIndex = products.findIndex(p => p.id === id)
        const updatedProducts = products.filter((prod) => prod.id !== id);
        const deletedProduct = products.find((prod) => prod.id === id);
        const productPrice = deletedProduct.price;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          if (!err) {
            Cart.deleteProduct(id, productPrice);
          } else console.log(err);
        });
      });
    }
  
    static fetchAll(cb) {
      getProductsFromFile(cb);
    }
  
    static findByID(ID, cb) {
      getProductsFromFile((products) => {
        const product = products.find((p) => p.id === ID);
        cb(product);
      });
    }
  };

// const Product = sequelize.define("product", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false,
//   },
//   image: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

// module.exports = Product;
