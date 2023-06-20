const Product = require('./../_config/models/product');

exports.getAllProducts = (req,res,next) => {
    Product.find()
    .then((products) => {
        res.status(200).json(products)
    })
    .catch((error)  => {
        res.status(404).json(error)
    })
}