import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private TokenService : TokenService,

    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.TokenService.getToken()
    const authReq = request.clone({
      headers : request.headers.set('Authorization',`Bearer ${token}`)
    })
    return next.handle(authReq);
  }
}
