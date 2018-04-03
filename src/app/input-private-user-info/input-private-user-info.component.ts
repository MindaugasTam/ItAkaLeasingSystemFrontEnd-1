import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import { CountryList } from '../CountryList';
<<<<<<< HEAD
import {BackValidationService} from '../services/back-validation.service';
=======
>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721

@Component({
  selector: 'app-input-private-user-info',
  templateUrl: './input-private-user-info.component.html',
  styleUrls: ['./input-private-user-info.component.css']
})
export class InputPrivateUserInfoComponent implements OnInit {

  public privateUserInfoForm: FormGroup;
  public countries: CountryList;

  constructor(fb: FormBuilder, private router: Router, public dataStore: DataStoreService) {
    this.privateUserInfoForm = fb.group({
      firstName: [null, [Validators.required, Validators.maxLength(100), Validators.pattern("[a-zA-Z ]*")]],
      lastName: [null, [Validators.required, Validators.maxLength(100), Validators.pattern("[a-zA-Z ]*")]],
      country: [null, Validators.required],
      privateID: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(70)]],
      phoneNumber: [null, [Validators.required, Validators.maxLength(20), Validators.pattern("^[0-9]*$")]],
      address: [null, [Validators.required, Validators.maxLength(500)]]
<<<<<<< HEAD
    });
    this.countries = new CountryList();
  }

  get firstName() {
    return this.privateUserInfoForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.privateUserInfoForm.get('lastName') as FormControl;
  }

  get privateID() {
    return this.privateUserInfoForm.get('privateID') as FormControl;
  }

  get country() {
    return this.privateUserInfoForm.get('country') as FormControl;
  }

  get email() {
    return this.privateUserInfoForm.get('email') as FormControl;
  }

  get phoneNumber() {
    return this.privateUserInfoForm.get('phoneNumber') as FormControl;
  }

  get address() {
    return this.privateUserInfoForm.get('address') as FormControl;
  }
=======
    })
    this.countries = new CountryList();
  }

  get firstName(){ return this.privateUserInfoForm.get('firstName') as FormControl;}
  get lastName(){return this.privateUserInfoForm.get('lastName') as FormControl;}
  get privateID(){return this.privateUserInfoForm.get('privateID') as FormControl;}
  get country(){return this.privateUserInfoForm.get('country') as FormControl;}
  get email(){return this.privateUserInfoForm.get('email') as FormControl;}
  get phoneNumber(){return this.privateUserInfoForm.get('phoneNumber') as FormControl;}
  get address(){return this.privateUserInfoForm.get('address') as FormControl;}
>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721

  send() {
    this.dataStore.savePrivateUserFormInfo(this.privateUserInfoForm);
    this.router.navigate(['/private-user-loan-report']);
  }

<<<<<<< HEAD
  toPreviousPage() {
    this.router.navigate(['/input-loan-info']);
  }

  reset() {
=======
  toPreviousPage(){
    this.router.navigate(['/input-loan-info']);
  }

  reset(){
>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721
    this.privateUserInfoForm.reset();
  }

  ngOnInit() {
<<<<<<< HEAD
    if (this.dataStore.privateUserInfo) {
=======
    if(this.dataStore.privateUserInfo){
>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721
      this.privateUserInfoForm = this.dataStore.getPrivateUserForm();
    }
  }

<<<<<<< HEAD
=======

>>>>>>> 69f7094390886651d3ad4ec29830fc6f05b89721
}
