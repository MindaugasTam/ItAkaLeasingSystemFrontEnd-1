import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginService) {

    this.loginForm = fb.group({
      userId: [null, [Validators.required, Validators.maxLength(20)] ],
      password:[null, [Validators.required, Validators.maxLength(20) ]]
    })
   }

   badUserData = false;

  get userId(){ return this.loginForm.get('userId') as FormControl;}
  get password(){ return this.loginForm.get('password') as FormControl;}

  @Output()
  newLoginRequest = new EventEmitter<Object>();

  ngOnInit() {
    
  }

  goToMain(){
    this.router.navigate(['/']);
  }

  login(){
    this.tryToLogin();
  }

  tryToLogin(){
    return this.loginService.createLoginRequest(this.userId.value, this.password.value)
    .then(data => {
      this.newLoginRequest.emit(data);
      let temp = JSON.stringify(data);
      let response = JSON.parse(temp);
      
      console.log(response);
      if(!response){
        this.badUserData = true;
      } else if (response.id!=null){
        this.badUserData = false;
        this.router.navigate(['/change-password']);
      }
    })
  }

}
