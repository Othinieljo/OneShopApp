import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { SingleProductComponent } from './single-product/single-product.component';


const routes: Routes = [
  {path:'home/:id', component:SingleProductComponent},

  { path: 'home', component: ProductPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
