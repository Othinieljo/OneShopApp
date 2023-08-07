import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {

    path: 'session',
    loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
  },
  {

    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    canActivate:[AuthGuard]


  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
