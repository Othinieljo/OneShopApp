const mongoose = require('mongoose');


function Connect(){
       mongoose.connect('')
       .then(() => {
        console.log('Connection réussi à la base de données ')
       })
       .catch((error) => {
        console.log(error)
       })
}


module.exports = Connect
