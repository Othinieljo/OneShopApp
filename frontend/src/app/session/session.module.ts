import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SessionRoutingModule } from './session-routing.module';
import { Signup2Component } from './signup2/signup2.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingService } from '../_services/loading.service';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    Signup2Component
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SessionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    LoginComponent,
    SignupComponent
  ],
  // providers: [
  //   {
  //     provide : HTTP_INTERCEPTORS,
  //     useClass : LoadingService,
  //     multi:true

  //   }
  // ]
})
export class SessionModule { }
