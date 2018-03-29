import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import {VehicleLoanService} from '../services/vehicle-loan.service';
import {BusinessUserService} from '../services/business-user.service';

@Component({
  selector: 'app-business-user-loan-report',
  templateUrl: './business-user-loan-report.component.html',
  styleUrls: ['./business-user-loan-report.component.css']
})
export class BusinessUserLoanReportComponent implements OnInit {

  constructor(public router: Router, private dataStore: DataStoreService,
              private businessUserService: BusinessUserService,
              private vehicleLoanService: VehicleLoanService) { }

    companyName = this.dataStore.getBusinessUserData().companyName;
    companyCode = this.dataStore.getBusinessUserData().companyCode;
    email = this.dataStore.getBusinessUserData().email;
    phoneNumber = this.dataStore.getBusinessUserData().phoneNumber;
    address = this.dataStore.getBusinessUserData().address;
    country = this.dataStore.getBusinessUserData().country;

    userInfo = this.dataStore.getBusinessUserData();
    loanInfo = this.dataStore.getLoanFormInfo();
    contractFee = this.dataStore.getContractFee();
    advancedPaymentAmount = this.dataStore.getAdvancedPaymentAmount();

    businessUserID = null;

    @Output()
    newBusinessUser = new EventEmitter<Object>();

    @Output()
    newVehicleLoan = new EventEmitter<Object>();

  ngOnInit() {
  }

  submit() {
    //this.router.navigate(['/input-private-user-info']);
    this.addBusinessUserToDB()
      .then(data => {
        this.newBusinessUser.emit(data);
        let temp = JSON.stringify(data);
        let parseTemp = JSON.parse(temp);
        this.businessUserID = parseTemp.id;
        //console.log("create business user callback");
      })
      .then(() => {
        this.addVehicleLoanToDB().then(() => {
          this.newVehicleLoan.emit();
        })
      });
    console.log("SUBMITTED")
  }

  toPreviousPage(){
    //console.log("Back");
    this.router.navigate(['/input-business-user-info']);
  }

  addBusinessUserToDB(){
    return this.businessUserService.createBusinessUser(this.companyCode, this.companyName, this.email,
      this.phoneNumber, this.address, this.country);
  }

  addVehicleLoanToDB() {
    let loanForm = this.dataStore.getLoanFormInfo();
    return this.vehicleLoanService.createVehicleLeasing(
      loanForm.carBrand, loanForm.carModel, loanForm.year, loanForm.enginePower,
      loanForm.paymentPercentage, this.advancedPaymentAmount, loanForm.leasePeriod,
      loanForm.margin, this.contractFee, loanForm.assetPrice, loanForm.paymentDay, this.businessUserID);
  }
}
