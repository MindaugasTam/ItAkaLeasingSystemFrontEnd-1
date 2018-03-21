import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-input-business-user-info',
  providers: [DataStoreService, RouterModule],
  templateUrl: './input-business-user-info.component.html',
  styleUrls: ['./input-business-user-info.component.css'],
  styles:['input.ng-invalid.ng-dirty {border:3px solid red}']
})
export class InputBusinessUserInfoComponent implements OnInit {

  public businessUserInputForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.businessUserInputForm = fb.group({
      companyName: [null, Validators.required],
      companyCode: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      adress: [null, Validators.required]
    })
   }

   get companyName(){
    return this.businessUserInputForm.get('companyName') as FormControl;
   }

   get companyCode(){
    return this.businessUserInputForm.get('companyCode') as FormControl;
   }

   get email(){
    return this.businessUserInputForm.get('email') as FormControl;
   }

   get phoneNumber(){
    return this.businessUserInputForm.get('phoneNumber') as FormControl;
   }

   get adress(){
    return this.businessUserInputForm.get('adress') as FormControl;
   }

  reset(){
    this.businessUserInputForm.reset();
  }


   toPreviousPage(){
    console.log("Back");
    this.router.navigate(['/input-loan-info']);
  }


  send(){
    this.router.navigate(['/business-user-loan-report']);
  }
  ngOnInit() {
    let dataStore = new DataStoreService();
  }

}
