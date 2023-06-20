const express = require('express');
const userCtrl = require('./../controllers/user');
const router = express.Router()

router.post('/login', userCtrl.login);
router.post('/signup', userCtrl.signup);



module.exports = router