const mongoose = require("mongoose") 

const productSchema = mongoose.Schema({
    name: String,
    brand: String,
    model: String,
    price: Number
})

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;