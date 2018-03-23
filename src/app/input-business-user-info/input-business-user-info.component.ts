import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-input-business-user-info',
  providers: [RouterModule],
  templateUrl: './input-business-user-info.component.html',
  styleUrls: ['./input-business-user-info.component.css']
})
export class InputBusinessUserInfoComponent implements OnInit {

  public businessUserInputForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, public dataStore: DataStoreService) {
    this.businessUserInputForm = fb.group({
      companyName: [null, Validators.required],
      companyCode: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      address: [null, Validators.required]
    })
   }

  get companyName(){return this.businessUserInputForm.get('companyName') as FormControl;}
  get companyCode(){return this.businessUserInputForm.get('companyCode') as FormControl;}
  get email(){return this.businessUserInputForm.get('email') as FormControl;}
  get phoneNumber(){return this.businessUserInputForm.get('phoneNumber') as FormControl;}
  get address(){return this.businessUserInputForm.get('address') as FormControl;}

  reset(){
    this.businessUserInputForm.reset();
  }


   toPreviousPage(){
    this.router.navigate(['/input-loan-info']);
  }

  send(){
    this.dataStore.saveBusinessUserFormInfo(this.businessUserInputForm);
    this.router.navigate(['/business-user-loan-report']);
  }
  ngOnInit() {
    if(this.dataStore.businessUserInfo){
      this.businessUserInputForm = this.dataStore.getBusinessUserForm();
    }
  }

}
