import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router : Router){}
  faEye = faEye
  faEyeSlash = faEyeSlash
  ViewPassword = false

  ViewPasswordclick(){
     this.ViewPassword = !this.ViewPassword
  }
  NavigateToSignup(){
    this.router.navigateByUrl('/signup')
  }
}
