import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
<<<<<<< HEAD
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';
=======
>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public forgetPasswordForm: FormGroup;

  customerFound = true;

  @Output()
  existenceConfirmation = new EventEmitter<Object>();

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginService) {

    this.forgetPasswordForm = fb.group({
      userId: [null, [Validators.required, Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      /* newPassword:[null, [Validators.required, Validators.maxLength(20) ]], */
    });
  }

  get userId() {
    return this.forgetPasswordForm.get('userId') as FormControl;
  }

  get email() {
    return this.forgetPasswordForm.get('email') as FormControl;
  }

<<<<<<< HEAD
  submit(){
    this.checkIfCustomerExists()
      .then(data => {
        if(this.customerFound){
          this.router.navigate(['/new-pass']);
        }
      });
  }

  back(){
    this.router.navigate(['/login']);
  }
=======
>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721

  ngOnInit() {
  }

  checkIfCustomerExists() {
    return this.loginService.existsUser(this.userId.value, this.email.value)
      .catch((error: any) => {
        if(error.status === 200){
          this.customerFound = true;
        }
        else if(error.status === 404){
          this.customerFound = false;
        }
      });
  }


}
