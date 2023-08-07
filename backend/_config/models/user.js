const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    id_user : {
        type:mongoose.Schema.Types.ObjectId,
        default:mongoose.Types.ObjectId
    },
    nom: {type : String, required:true},
    prenom : {type : String, required:true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required: true},
    number : {type : String, required:true},
    adresse : {type : String, required : true}
},
{collection : 'users'}
)

userSchema.plugin(uniqueValidator, {message : 'Email Déjà enregistré'})
module.exports = mongoose.model('user', userSchema)