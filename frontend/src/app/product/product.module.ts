import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductRoutingModule} from './product-routing.module'
import { SessionRoutingModule } from '../session/session-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SingleProductComponent } from './single-product/single-product.component';
import { CategoryComponent } from './category/category.component';




@NgModule({
  declarations: [
    ProductPageComponent,
    ProductComponent,
    ProductListComponent,
    SingleProductComponent,
    CategoryComponent,


  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FontAwesomeModule
  ],
  exports : [
    ProductPageComponent
  ]
})
export class ProductModule { }
