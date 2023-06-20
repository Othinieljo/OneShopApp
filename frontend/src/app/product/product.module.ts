import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';




@NgModule({
  declarations: [
    ProductPageComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ProductPageComponent
  ]
})
export class ProductModule { }
