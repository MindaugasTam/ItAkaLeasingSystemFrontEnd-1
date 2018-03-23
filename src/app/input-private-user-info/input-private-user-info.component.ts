import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-input-private-user-info',
  templateUrl: './input-private-user-info.component.html',
  styleUrls: ['./input-private-user-info.component.css']
})
export class InputPrivateUserInfoComponent implements OnInit {

  public privateUserInfoForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, public dataStore: DataStoreService) {
    this.privateUserInfoForm = fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      privateID: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      address: [null, Validators.required]
    })
  }

  get firstName(){ return this.privateUserInfoForm.get('firstName') as FormControl;}
  get lastName(){return this.privateUserInfoForm.get('lastName') as FormControl;}
  get privateID(){return this.privateUserInfoForm.get('privateID') as FormControl;}
  get email(){return this.privateUserInfoForm.get('email') as FormControl;}
  get phoneNumber(){return this.privateUserInfoForm.get('phoneNumber') as FormControl;}
  get address(){return this.privateUserInfoForm.get('address') as FormControl;}

  send() {
    this.dataStore.savePrivateUserFormInfo(this.privateUserInfoForm);
    this.router.navigate(['/private-user-loan-report']);
  }

  toPreviousPage(){
    this.router.navigate(['/input-loan-info']);
  }

  reset(){
    this.privateUserInfoForm.reset();
  }

  ngOnInit() {
    if(this.dataStore.privateUserInfo){
      this.privateUserInfoForm = this.dataStore.getPrivateUserForm();
    }
  }
}
