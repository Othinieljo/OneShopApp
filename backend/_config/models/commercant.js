const mongoose = require('mongoose')


const commercantSchema = mongoose.Schema({
    id_com : {type : String, required : true},
    nom_boutique : {type : String, required : true},
    description_boutique : {type : String, required :true},
    adresse_boutique : {type : String, required : true},
    categorie_boutique : {type : String, required : true},
    id_user : {type : String, required : true}

})