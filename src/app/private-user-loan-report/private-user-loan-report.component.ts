import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-private-user-loan-report',
  templateUrl: './private-user-loan-report.component.html',
  styleUrls: ['./private-user-loan-report.component.css']
})
export class PrivateUserLoanReportComponent implements OnInit {

  firstName=this.dataStore.getPrivateUserData().firstName;
  lastName=this.dataStore.getPrivateUserData().lastName;
  address=this.dataStore.getPrivateUserData().address;
  email=this.dataStore.getPrivateUserData().email;
  phoneNumber=this.dataStore.getPrivateUserData().phoneNumber;
  privateID=this.dataStore.getPrivateUserData().privateID;


  constructor(private router: Router, private dataStore : DataStoreService) {
   }

  ngOnInit() {
    if(this.dataStore.privateUserInfo){
      console.log(this.dataStore.getPrivateUserData());
    }
  }

  submit() {
    //this.router.navigate(['/input-private-user-info']);
    console.log("SUBMITTED")
  }

  toPreviousPage(){
    console.log("Back");
    this.router.navigate(['/input-private-user-info']);
  }
}
