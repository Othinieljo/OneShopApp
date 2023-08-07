import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from 'src/app/_interfaces/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent  implements OnInit{
  Product! : Product

  constructor(
    private route :ActivatedRoute,
    private ProductService : ProductService,

    ){}
  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    console.log(id)
    this.ProductService.getProductWithId(id).subscribe(

      (res) => {
        this.Product = res;
        console.log(res)
      },
      (error) => {
        console.log(error)
      }
    )


  }
}
