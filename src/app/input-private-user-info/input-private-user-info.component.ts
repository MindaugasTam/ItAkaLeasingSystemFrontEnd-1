import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-input-private-user-info',
  providers: [DataStoreService, RouterModule],
  templateUrl: './input-private-user-info.component.html',
  styleUrls: ['./input-private-user-info.component.css'],
  styles:['input.ng-invalid.ng-dirty {border:3px solid red}']
})
export class InputPrivateUserInfoComponent implements OnInit {

  public privateUserInfoForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, public dataStore: DataStoreService) {
    this.privateUserInfoForm = fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      privateID: ["", [Validators.required, Validators.minLength(11)]],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: ["", Validators.required],
      adress: ["", Validators.required]
    })
  }

  get firstName(){
    return this.privateUserInfoForm.get('firstName') as FormControl;
  }

  get lastName(){
    return this.privateUserInfoForm.get('lastName') as FormControl;
  }

  get privateID(){
    return this.privateUserInfoForm.get('privateID') as FormControl;
  }

  get email(){
    return this.privateUserInfoForm.get('email') as FormControl;
  }

  get phoneNumber(){
    return this.privateUserInfoForm.get('phoneNumber') as FormControl;
  }

  get adress(){
    return this.privateUserInfoForm.get('adress') as FormControl;
  }

  send() {
    console.log(this.privateUserInfoForm.value);
    this.router.navigate(['/private-user-loan-report']);
  }

  toPreviousPage(){
    console.log("Back");
    this.router.navigate(['/input-loan-info']);
  }

  reset(){
    this.privateUserInfoForm.reset();
  }

  ngOnInit() {
    //let dataStore = new DataStoreService();
  }
}
