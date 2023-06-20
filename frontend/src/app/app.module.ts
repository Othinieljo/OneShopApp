import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './session/login/login.component';
import { SessionModule } from './session/session.module';
import { LoadingService } from './_services/loading.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './_interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ProductModule,
    HttpClientModule,
    SessionModule

  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass:LoaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
