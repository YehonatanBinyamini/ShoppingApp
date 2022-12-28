const products = [];
const defaultImage = "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png";
module.exports = class Product {
    constructor(title, price, description, image){
        this.title = title;
        this.price = price;
        this.description = description;
        image ? this.image = image : this.image = defaultImage;
    }

    save() {
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}

