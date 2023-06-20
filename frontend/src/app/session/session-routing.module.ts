import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';

const routes: Routes = [
  {
     path: 'connexion', component: LoginComponent,

  },
  {
    path:'signup1', component:SignupComponent
  },
  {
    path:'signup2' , component:Signup2Component
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule {}
