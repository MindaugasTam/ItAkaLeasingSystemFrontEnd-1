import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public passwordChangeForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginService) {

    this.passwordChangeForm = fb.group({
      userId: [null, [Validators.required, Validators.maxLength(20)] ],
      oldPassword:[null, [Validators.required, Validators.maxLength(20) ]],
      newPassword:[null, [Validators.required, Validators.maxLength(20) ]],
    })
   }

   badUserData = false;

  get userId(){ return this.passwordChangeForm.get('userId') as FormControl;}
  get oldPassword(){ return this.passwordChangeForm.get('oldPassword') as FormControl;}
  get newPassword(){ return this.passwordChangeForm.get('newPassword') as FormControl;}


  @Output()
  newLoginRequest = new EventEmitter<Object>();

  ngOnInit() {

  }

  goToMain(){
    this.router.navigate(['/']);
  }

  changePassword(){
    this.tryToChangePassword();
  }

  tryToChangePassword(){
    return this.loginService.requestPasswordChange(this.userId.value, this.oldPassword.value, this.newPassword.value)
    .then(data => {
      this.newLoginRequest.emit(data);
      let temp = JSON.stringify(data);
      let response = JSON.parse(temp);
      console.log(response);
<<<<<<< HEAD
      this.goToMain();
=======
>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721
    })
  }

}
