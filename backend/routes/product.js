const express = require('express')
const productCtr = require('./../controllers/product')

const router = express.Router()

router.get('/products',productCtr.getAllProducts)



module.exports = router