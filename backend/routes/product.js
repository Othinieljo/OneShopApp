const express = require('express')
const productCtr = require('./../controllers/product')

const router = express.Router()

router.get('/products',productCtr.getAllProducts);
router.get('/product/:id', productCtr.getOneProduct)



module.exports = router