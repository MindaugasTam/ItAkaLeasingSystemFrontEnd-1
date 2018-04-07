import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {DataStoreService} from '../services/data-store.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AdministratorService} from '../services/administrator.service';
import {VehicleLoanService} from '../services/vehicle-loan.service';
import {BusinessUserService} from '../services/business-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginService, public dataStore: DataStoreService,
              private adminService: AdministratorService, private vehicleLoanService: VehicleLoanService) {

    this.loginForm = fb.group({
      userId: [null, [Validators.required, Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.maxLength(20)]]
    });
    let currLogin = JSON.parse(localStorage.getItem('currentUser'));
    if (currLogin != null) {
      if(currLogin['roles'] == 'administrator') {
        this.getLeasingOfficerData(currLogin['token']);
      }
      else{
        this.getCustomerData(currLogin['token'], currLogin['username']);
      }
    }
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
      this.loginLeasingOfficer();
    }
    else {
      this.loginCustomer();
    }
  }

  parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  loginLeasingOfficer() {
    return this.loginService.createOfficerLoginRequest(this.userId.value, this.password.value)
      .then(data => {
        let adminToken = data;
        let parsedToken = this.parseJwt(data);
        if (parsedToken['roles'] != 'admin') {
          this.badUserData = true;
        }
        else {
          localStorage.setItem('currentUser',
            JSON.stringify({username: 'admin', roles: 'administrator', token: adminToken}));
          this.getLeasingOfficerData(adminToken);
        }
      })
      .catch((error: any) => {
        let resp = JSON.parse(JSON.stringify(error));
        console.log(resp['error']);
      });
  }

  getLeasingOfficerData(adminToken) {
    let headers = {headers: new HttpHeaders({'Authorization': 'Bearer ' + adminToken})};
    this.adminService.getCustomerDataForBusinessOfficer(headers)
      .then(data => {
        let response: Map<any, any>;
        response = JSON.parse(JSON.stringify(data));
        this.dataStore.storeOfficerContent(response);
        this.router.navigate(['officer-menu']);
      });
  }

  loginCustomer() {

    return this.loginService.createLoginRequest(this.userId.value, this.password.value)
      .then(data => {
        this.newLoginRequest.emit(data);
        let temp = JSON.stringify(data);
        let response = JSON.parse(temp);
        if (!response) {
          this.badUserData = true;
        }
        else if (response == 'first login') {
          this.badUserData = false;
          this.router.navigate(['/change-password']);
        }
        else if (response) {
          let parsedToken = this.parseJwt(data);
          if (parsedToken['roles'] != 'user') {
            this.badUserData = true;
          }
          else {
            this.badUserData = false;
            localStorage.setItem('currentUser',
              JSON.stringify({username: this.userId.value, roles: 'user', token: data}));
            this.getCustomerData(data, this.userId.value);
          }
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  getCustomerData(userToken, userId) {
    let headers = {headers: new HttpHeaders({'Authorization': 'Bearer ' + userToken})};
    this.vehicleLoanService.getVehicleLeasingsByUserID(userId)
      .then(data => {
        this.dataStore.storeLoanResponse(data);
        this.router.navigate(['/loan-status']);
      });
  }

}
