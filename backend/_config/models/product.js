const mongoose = require('mongoose');



const productSchema = mongoose.Schema({
    id_produit: {type : String, required:true},
    nom_produit : {type:String,required:true},
    categorie_produit : {type : String, required : true},
    prix_produit : {type : Number, required : true},
    photo_produit : {type : String, required:true},
    description_produit : {type : String, required : true },
    id_com : { type : String, required : true}

})

module.exports = mongoose.model('Product',productSchema)