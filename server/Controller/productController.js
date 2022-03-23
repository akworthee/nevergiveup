const productModel = require("../Model/productModel");



exports.insertProduct = async (req,res) => {
    try{
        const product = new productModel();
        product.name = req.body.name;
        product.brand = req.body.brand;
        product.model = req.body.model;
        product.price = req.body.price;

        const createProduct = await product.save();
        res.send(createProduct);
    }
    catch(e){
        console.log(e);
    }
}