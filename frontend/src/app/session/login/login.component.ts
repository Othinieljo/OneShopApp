import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/_services/auth.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { User1 } from 'src/app/_interfaces/user1';
import { TokenService } from 'src/app/_services/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  constructor(
    private router : Router,
    private AuthService : AuthService,
    private formBuilder : FormBuilder,
    private TokenService : TokenService,


    ){}
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  ViewPassword = false;
  warning!: string
  userForm!: FormGroup
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null,[Validators.required,Validators.minLength(6)] ]
    })

  }

  ViewPasswordclick(){
     this.ViewPassword = !this.ViewPassword
  }
  NavigateToSignup(){
    this.router.navigateByUrl('/signup1')
  }
  OnSubmit(){
    if (this.userForm.valid){
      const user : User1 = {
        email : this.userForm.value.email,
        password : this.userForm.value.password
      }
      console.log(user)

    this.AuthService.Login(user).subscribe((res) => {
      this.TokenService.saveToken(res.token);
      this.TokenService.saveId(res._id)
      this.router.navigate(['/product/home']);


    },
    (error) => {
      console.error(error);

      this.warning = "Paire email/Mot de passe incorect"
      setTimeout(() => {
            this.warning = ""
      },3000)
    }

    )
  }

  }
}
