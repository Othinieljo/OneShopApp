import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User1 } from '../_interfaces/user1';
import { User2 } from '../_interfaces/user2';
import { User } from '../_interfaces/user';
import { Observable } from 'rxjs';
import { Token } from '../_interfaces/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private part1Data! : User1;
  private part2Data! : User2;

  endpoint : string = 'http://localhost:3000/api';

  constructor(private http : HttpClient) { }

  setPartie1( data : User1){
     this.part1Data = data
  }
  getPartie1() : User1{
    return this.part1Data
  }
  setPartie2( data : User2){
    this.part2Data = data
  }
  getPartie2() : User2{
    return this.part2Data;
  }
  Login(data : User1) : Observable<Token>{
    let api = `${this.endpoint}/login`
    return this.http.post<Token>(api,data)
  }
  Signup(data : User) : Observable<any>{
    let api = `${this.endpoint}/signup`
    return this.http.post(api,data)
  }
}
