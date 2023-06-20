import { Injectable } from '@angular/core';
import { Product } from '../_interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/api/products')



  }
}
