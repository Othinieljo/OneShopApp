

const express = require('express');
const FavCtr = require('./../controllers/favorite')


const router = express.Router();

router.post('/fav',FavCtr.CreateFavorite);
router.post('/fav/check',FavCtr.CheckFavorite);
router.delete('/fav/delete/:id_user/id_produit',FavCtr.DeleteFavorite);





module.exports = router


