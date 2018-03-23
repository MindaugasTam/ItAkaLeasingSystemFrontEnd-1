import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-business-user-loan-report',
  templateUrl: './business-user-loan-report.component.html',
  styleUrls: ['./business-user-loan-report.component.css']
})
export class BusinessUserLoanReportComponent implements OnInit {

  constructor(public router: Router, private dataStore: DataStoreService) { }

    companyName = this.dataStore.getBusinessUserData().companyName;
    companyCode = this.dataStore.getBusinessUserData().companyCode;
    email = this.dataStore.getBusinessUserData().email;
    phoneNumber = this.dataStore.getBusinessUserData().phoneNumber;
    address = this.dataStore.getBusinessUserData().adress;

    userInfo = this.dataStore.getBusinessUserData();
    loanInfo = this.dataStore.getLoanFormInfo();
    contractFee = this.dataStore.getContractFee();
    advancedPaymentAmount = this.dataStore.getAdvancedPaymentAmount();

  ngOnInit() {
    console.log(this.dataStore.getBusinessUserData);
  }
  submit() {
    //this.router.navigate(['/input-private-user-info']);
    console.log("SUBMITTED")
  }

  toPreviousPage(){
    console.log("Back");
    this.router.navigate(['/input-business-user-info']);
  }
}
