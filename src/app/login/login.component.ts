import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {DataStoreService} from '../services/data-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginService, public dataStore: DataStoreService) {

    this.loginForm = fb.group({
      userId: [null, [Validators.required, Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.maxLength(20)]]
    });
  }

  badUserData = false;

  get userId() {
    return this.loginForm.get('userId') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  @Output()
  newLoginRequest = new EventEmitter<Object>();

  ngOnInit() {

  }

  goToMain() {
    this.router.navigate(['/']);
  }

  login() {
    this.tryToLogin();
  }

  forgotPassword() {
    this.forgotPasswordPrompt();
  }

  forgotPasswordPrompt() {
    this.router.navigate(['/forget-password']);
  }

  tryToLogin() {
    if (this.userId.value === 'admin') {
      console.log('wow men admin');
      return this.loginService.createOfficerLoginRequest(this.userId.value, this.password.value)
        .then(data => {
          let response: Map<any, any>;
          response = JSON.parse(JSON.stringify(data));
          this.dataStore.storeOfficerContent(response);
          this.router.navigate(['officer-menu']);
        })
        .catch((error: any) => {
          let resp = JSON.parse(JSON.stringify(error));
          console.log(resp['error']);
        });
    }
    else {
      return this.loginService.createLoginRequest(this.userId.value, this.password.value)
        .then(data => {
          this.newLoginRequest.emit(data);
          let temp = JSON.stringify(data);
          let response = JSON.parse(temp);
          if (!response) {
            this.badUserData = true;
          }
          else if (response == 'Password exists') {
            this.badUserData = false;
            this.router.navigate(['/change-password']);
          }
          else if (response) {
            this.badUserData = false;
            this.dataStore.storeLoanResponse(response);
            this.router.navigate(['/loan-status']);
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }

}
