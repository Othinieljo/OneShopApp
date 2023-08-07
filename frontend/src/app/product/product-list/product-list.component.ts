import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Favorite } from 'src/app/_interfaces/favorite';
import { Product } from 'src/app/_interfaces/product';
import { FavService } from 'src/app/_services/fav.service';
import { ProductService } from 'src/app/_services/product.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products$! : Observable<Product[]>
  isLiked$! : Observable<boolean>
  constructor(
    private productservice : ProductService,
    private router : Router,
    private favservice : FavService,
    private TokenService : TokenService

    ){}
  AjouterPanier( product : Product){
    console.log(product)
  }
  NavigateTo(id:String){
    // this.router.navigateByUrl(`/product/home/${id}`)

 }
 OnProductLiked(isLiked:Boolean, id_produit : string){
      const id = this.TokenService.getId()
      const newFav : Favorite = {
        id_fav:'',
        id_produit : id_produit,
        id_user : id

      }
      if (isLiked){
        console.log("ggghqs")
        this.favservice.DeleteFavorite(newFav).subscribe(
          (res) => {
            console.log("Del à la liste des favoris")
          },
          (error) => {
            console.error("Erreur ")
          }
        )

      }else{
        this.favservice.CreateFavorite(newFav).subscribe(
          (res) => {
            console.log('Nouveau favori crée avec succès', res)
          },
          (error) => {
            console.error("Erreur lors de la création du favori",error)
          }
        )


      }

 }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.products$ = this.productservice.getAllProducts();




  }

}
