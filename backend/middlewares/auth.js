const jwt = require('jsonwebtoken');


module.exports = (req,res,next) => {
    try{

        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, 'RANDOM_TOKEN_SECRER');
        
        

        next()

    }catch(error){
          res.status(401).json({message : 'Token no provided'})
    }
}