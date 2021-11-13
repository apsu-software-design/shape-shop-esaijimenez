"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
    Product.prototype.getName = function () { return this.name; };
    Product.prototype.getPrice = function () { return this.price; };
    Product.prototype.getDescription = function () { return this.description; };
    return Product;
}());
exports.Product = Product;
//add a new product
//remove a product based on the index number of that product in a list
//return a list of all products
var ProductModel = /** @class */ (function () {
    function ProductModel() {
        this.shopping_cart = [];
        this.quantity_cart = [];
    }
    ProductModel.prototype.addProductToCart = function (productResponse, amountResponse) {
        while (true) {
            if (productResponse == "1") {
                var item = new Product("Triangle", 3.5, "It's got three sides!");
                this.shopping_cart.push(item);
                break;
            }
            else if (productResponse == "2") {
                var item = new Product("Square", 4.5, "It's got four sides!");
                this.shopping_cart.push(item);
                break;
            }
            else if (productResponse == "3") {
                var item = new Product("Pentagon", 5.5, "It's got five sides!");
                this.shopping_cart.push(item);
                break;
            }
            else {
                console.log("Invalid Option!");
            }
            console.log('');
        }
        this.quantity_cart.push(parseInt(amountResponse));
    };
    ProductModel.prototype.removeProductFromCart = function (removeResponse) {
        for (var i = 0; i < this.shopping_cart.length; i++) {
            console.log(i + ": " + this.shopping_cart[i].getName());
        }
        for (var i = 0; i < this.shopping_cart.length; i++) {
            if (removeResponse == this.shopping_cart[i].getName()) {
                this.shopping_cart.splice(i, 1);
                this.quantity_cart.splice(i, 1);
            }
        }
    };
    return ProductModel;
}());
exports.ProductModel = ProductModel;
var ProductView = /** @class */ (function () {
    function ProductView() {
    }
    return ProductView;
}());
