import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from '../_interfaces/favorite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor(private http : HttpClient) { }

  endpoint : string = 'http://localhost:3000/api';

  CreateFavorite(Fav : Favorite) : Observable<any>{
    let api = `${this.endpoint}/fav`;
    return this.http.post(api,Fav)
  }
  CheckFavorite(Fav : Favorite) : Observable<boolean>{
    let api = `${this.endpoint}/fav/check`
    return this.http.post<boolean>(api,Fav)
  }
  DeleteFavorite(Fav : Favorite) : Observable<any>{
    const UserId = Fav.id_user;
    const ProduitId = Fav.id_produit;
    let api = `${this.endpoint}/fav/delete/${UserId}/${ProduitId}`
    return this.http.delete(api)
  }
}
