import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/_services/auth.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { User1 } from 'src/app/_interfaces/user1';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  implements OnInit{


  constructor(
    private router : Router,
    private AuthService : AuthService,
    private formBuilder : FormBuilder
    ){}
    user1Form! : FormGroup
  faEye = faEye
  faEyeSlash = faEyeSlash
  ViewPassword = false
  ngOnInit(): void {
    this.user1Form = this.formBuilder.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null,[Validators.required,Validators.minLength(6)] ]
    })
    }
  ViewPasswordclick(){
     this.ViewPassword = !this.ViewPassword
  }
  NavigateToLogin(){
    this.router.navigateByUrl('/connexion')
  }
  NavigateToPart2(){
    if (this.user1Form.valid){
      const user1 : User1 = {
        email : this.user1Form.value.email,
        password : this.user1Form.value.password
      }
      console.log(user1)
      this.AuthService.setPartie1(user1);
    this.router.navigate(['/signup2'])
    }

  }

}
