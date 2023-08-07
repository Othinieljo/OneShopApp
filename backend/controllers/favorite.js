const { default: mongoose } = require('mongoose');
const Favorite = require('./../_config/models/favorite') ;


exports.CreateFavorite = (req,res,next) => {

    const favorite =  new Favorite({
        id_fav : new mongoose.Types.ObjectId,
        id_produit:req.body.id_produit,
        id_user:req.body.id_user
    })
    favorite.save()
    .then(() => {
        res.status(201).json({message:'Bien ajouté aux favoris'})
    })
    .catch((error) => {
        res.status(500).json({message : 'Une erreur est survenu lors de la création du favori'})
    })
       
}
exports.CheckFavorite = (req,res,next) => {
    Favorite.findOne({id_produit:req.body.id_produit,id_user:req.body.id_user})
    .then((favorite) => {
        if(favorite){
            res.status(200).json({isFavorite:true})

        }else{
            res.status(200).json({isFavorite:false})
        }
        
    })
    .catch((error) => {
        res.status(500).json({message: 'Erreur lors de la vérification des favoris'})
    })
} 
exports.DeleteFavorite = (req,res,next) => {
    const userId = req.params.id_user;
    const ProduitId = req.params.id_produit
    
    Favorite.findOneAndDelete({id_produit : ProduitId, id_user : userId})
    .then(() => {
        res.status(200).json({ message : 'Favori supprimé avec succès'})
    })
    .catch((error) => {
        res.status(500).json({message : 'Une erreur est survenu lors de la suppression du favori'})
    })
}