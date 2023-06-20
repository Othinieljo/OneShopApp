const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    nom: {type : String, required:true},
    prenom : {type : String, required:true},
    email : {type : String, required : true},
    password : {type : String, required: true},
    number : {type : Number, required:true},
    adresse : {type : String, required : true}
},
{collection : 'users'}
)

userSchema.plugin(uniqueValidator, {message : 'Email Déjà enregistré'})
module.exports = mongoose.model('user', userSchema)