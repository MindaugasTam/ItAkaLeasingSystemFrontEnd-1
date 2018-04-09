import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css']
})
export class NewPassComponent implements OnInit {

  public newPasswordForm: FormGroup;

  validInput = true;
  validUser = true;

  token = null;
  validToken = false;

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginService,
              private route: ActivatedRoute) {

    this.route.queryParams
      .subscribe(params => {
        this.token = params.token;
      });

    this.newPasswordForm = fb.group({
      userId: [null, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]],
      newPassword: [null, [Validators.required]],
      repeatPassword: [null, [Validators.required]],
    });

    if(this.token == null){
      //console.log("NO TOKEN SPECIFIED");
    }
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

    if (this.validToken && (this.newPassword.value === this.repeatPassword.value)) {
      this.loginService.forgottenPassword(this.userId.value, this.newPassword.value, this.token)
        .then(data => {
          if (data === true) {
            this.validUser = true;
            this.router.navigate(['/']);
          }
          else if (data === false) {
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
    this.loginService.validateToken(this.token)
      .catch((error: any) => {
        console.log(error);
        if(error.status === 200){
          console.log(error);
          this.validToken = true;
        }
        else if(error.status === 404){
          this.validToken = false;
          //console.log("INVALID TOKEN, SHOULD CLOSE PAGE OR SOMETHING")
          this.router.navigate(['/']);
        }
      });
  }

}
