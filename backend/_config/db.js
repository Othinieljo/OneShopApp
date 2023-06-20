const mongoose = require('mongoose');


function Connect(){
       mongoose.connect('mongodb+srv://John:Wifesk78@cluster0.fzsy48h.mongodb.net/OneShop?retryWrites=true&w=majority')
       .then(() => {
        console.log('Connection réussi à la base de données ')
       })
       .catch((error) => {
        console.log(error)
       })
}


module.exports = Connect