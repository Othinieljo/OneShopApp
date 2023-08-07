import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Product } from 'src/app/_interfaces/product';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FavService } from 'src/app/_services/fav.service';
import { TokenService } from 'src/app/_services/token.service';
import { Favorite } from 'src/app/_interfaces/favorite';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // isLiked : Boolean = false ;
  likeColor : string = 'red';
  dislikeColor : string = 'black'
  @Input() Product! : Product;
   isLiked! : boolean | null;
  @Output() AjouterPanierClick = new EventEmitter<void>();
  @Output() NavigateToClick = new EventEmitter<void>();
  @Output() liked : EventEmitter<Boolean> = new EventEmitter<Boolean>
  faHeart = faHeart
  faHeartS = SolidHeart ;
  constructor(private FavoriteService : FavService,
              private TokenService : TokenService
    ){}


  AjouterPanier(){
    this.AjouterPanierClick.emit();
  }
  NavigateTo(){
    this.NavigateToClick.emit()
  }
  toggleLike(){
    this.isLiked = !this.isLiked;
    this.liked.emit(this.isLiked)
  }
  ngOnInit(): void {
    const id = this.TokenService.getId()
      const newFav : Favorite = {
        id_fav:'',
        id_produit : this.Product.id_produit,
        id_user : id

      }
    this.FavoriteService.CheckFavorite(newFav).subscribe(
      (isLiked) => {
        console.log(isLiked)
        this.isLiked = isLiked;
      },
      (error) => {
        console.error('Erreur lors de la récupération du statut de "isLiked" :', error);
      }
    )

  }


}
