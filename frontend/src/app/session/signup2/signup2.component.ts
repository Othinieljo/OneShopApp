import { Component,OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {FormBuilder,FormGroup,Validators}  from '@angular/forms'
import { User2 } from 'src/app/_interfaces/user2';
import { AuthService } from 'src/app/_services/auth.service';
import { LoadingService } from 'src/app/_services/loading.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.scss']
})
export class Signup2Component implements OnInit{
  faEye = faEye
  faEyeSlash = faEyeSlash
  ViewPassword = false
  user2Form!: FormGroup
  constructor(
    private formBuilder : FormBuilder,
    private AuthService : AuthService,
    public loadingService : LoadingService

           ){}
   ngOnInit(): void {
    this.user2Form = this.formBuilder.group({
      nom : [null, [Validators.required]],
      prenom :  [null, [Validators.required]],
      number : [null,[Validators.required]],
      adresse : [null, [Validators.required]]
    })
    setInterval(() => {
          // this.loadingService.isloadingSubject.subscribe((res) => {
          //   console.log(res)
          // })
    } , 1000)
   }

  ViewPasswordclick(){
     this.ViewPassword = !this.ViewPassword
  }
  submitForm(){
    if (this.user2Form.valid){
      const user2  : User2 = {
        nom : this.user2Form.value.nom,
        prenom : this.user2Form.value.prenom,
        number : this.user2Form.value.number,
        adresse : this.user2Form.value.number
      }
      this.AuthService.setPartie2(user2)
      console.log(user2)
      const user = {
        ...this.AuthService.getPartie1(),
        ...this.AuthService.getPartie2()
      }
      this.AuthService.Signup(user).subscribe((res) => {
        console.log(res)
      })
      console.log(user)
    }
  }

}
