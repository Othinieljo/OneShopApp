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
exports.getOneProduct = (req,res,next) => {
    
    Product.findOne({_id : req.params.id})
    .then((product) => {
        res.status(200).json(product)

    })
    .catch((error) => {
        res.status(404).json(error)
    })
}