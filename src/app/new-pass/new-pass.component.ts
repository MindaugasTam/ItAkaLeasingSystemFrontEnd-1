import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css']
})
export class NewPassComponent implements OnInit {

  public newPasswordForm: FormGroup;

  validInput = true;
  validUser = true;

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.newPasswordForm = fb.group({
      userId: [null, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]],
      newPassword: [null, [Validators.required]],
      repeatPassword: [null, [Validators.required]],
    });
  }

  get userId() {
    return this.newPasswordForm.get('userId') as FormControl;
  }

  get newPassword() {
    return this.newPasswordForm.get('newPassword') as FormControl;
  }

  get repeatPassword() {
    return this.newPasswordForm.get('repeatPassword') as FormControl;
  }

  submit() {
    if (this.newPassword.value === this.repeatPassword.value) {
      this.loginService.forgottenPassword(this.userId.value, this.newPassword.value)
        .then(data => {
          if (data === true) {
            this.validUser = true;
            console.log('success');
            this.router.navigate(['/']);
          }
          else if (data === false) {
            console.log('failure');
            this.validUser = false;
          }
        });
    }
    else {
      //console.log("Input passwords not equal");
      this.validInput = false;
    }
  }

  close() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
