import { Injectable} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, Subject, finalize, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = new Subject<boolean>();
  constructor() {}

  show(){
    this.isLoading.next(true)
  }
  hide(){
    this.isLoading.next(false)
  }
}
