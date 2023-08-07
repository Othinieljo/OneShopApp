import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token:string){
    localStorage.setItem('token',token)
  }
  saveId(id:string){
    localStorage.setItem('id',id)
  }
  getToken(){
    const token = localStorage.getItem('token')

    if (token){
      return token
    }else{
      return null
    }
  }
  getId() : string{
    const id = localStorage.getItem('id');
     if (id){
      return id
     }else{
      return ''
     }
  }
}
