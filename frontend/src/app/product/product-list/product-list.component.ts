import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_interfaces/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products$! : Observable<Product[]>
  constructor(private productservice : ProductService){}
  AjouterPanier( product : Product){
    console.log(product)
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.products$ = this.productservice.getAllProducts()


  }

}
