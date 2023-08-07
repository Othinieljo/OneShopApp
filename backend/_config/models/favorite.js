const mongoose = require('mongoose');



const FavoriteSchema = mongoose.Schema({
    id_fav : {
        type :mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
    },
    id_produit : {
         type:mongoose.Schema.Types.ObjectId,
         ref:'Product'
    },
    id_user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})


module.exports = mongoose.model('Favorite',FavoriteSchema)