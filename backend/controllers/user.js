const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./../_config/models/user');
const { check, validationResult } = require('express-validator')


exports.signup = (req,res,next) => {
    bcrypt.hash(req.body.password,10)
    .then((hash) =>  {
        const user = new User({
                nom : req.body.nom,
                prenom : req.body.prenom,
                email : req.body.email,
                password : hash,
                number : req.body.number,
                adresse : req.body.adresse

            
        })
        user.save()
        .then(() => {
             
                res.status(201).json({message : 'Utilisateur bien crée'})
             
        })
        .catch((error) => {
            
                res.status(400).json(error)
           
            
        })


    })
    .catch((error) => {
        
            res.status(500).json(error)
        
       
    })
    
}


exports.login = (req,res) => {
    User.findOne({email : req.body.password})
    .then((user) => {
        if(!user){
            return res.status(401).json({message : 'Paire de login/mot de passe incorrecte '})
        }
        bcrypt.compare(req.body.password, user.password)
        .then((valid) => {
            if (!valid){
                return res.status(401).json({message : 'Paire de login / mot de passe incorrecte'})
            }
            const token = {
                userId : user.id_user,
                token : jwt.sign(
                  { email : user.email, 
                    id : user._id},
                    'RANDOM_TOKEN_SECRET',
                    {expiresIn : '24h'}
                )
            }
            res.status(200).json({
                token:token,
                expiresIn:86400,
                _id : user._id
            })
        })
        .catch((error) => {
            res.status(500).json(error)
        } )
    })
    .catch((error) => {
        res.status(500).json(error)
    })
}