import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import {VehicleLoanService} from '../services/vehicle-loan.service';
import {BusinessUserService} from '../services/business-user.service';
declare var $:any;

@Component({
  selector: 'app-business-user-loan-report',
  templateUrl: './business-user-loan-report.component.html',
  styleUrls: ['./business-user-loan-report.component.css']
})


export class BusinessUserLoanReportComponent implements OnInit {
  responseText : String;
  addBusinessUser : Boolean;
  addBusinessVehicle : Boolean;
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
    businessUserLoginID = null;

    @Output()
    newBusinessUser = new EventEmitter<any>();

    @Output()
    newVehicleLoan = new EventEmitter<Object>();

  ngOnInit() {
  }

  submit() {
    //this.router.navigate(['/input-private-user-info']);
    this.responseText ="";
    this.addBusinessUserToDB()
      .then(data  => {
        this.newBusinessUser.emit(data);

        let temp = JSON.stringify(data);
        let parseTemp = JSON.parse(temp);
        this.responseText = temp;
        this.businessUserID = parseTemp.id;
        this.businessUserLoginID = parseTemp.userID;
        //console.log("create business user callback");
        if(this.responseText.length > 0 ){
           this.addBusinessUser = true;
        }else{
          this.addBusinessUser = false;
                 }
      })
      .then(() => {
        this.addVehicleLoanToDB().then(data => {
          this.newVehicleLoan.emit(data);
          let temp = JSON.stringify(data);
          let parseTemp = JSON.parse(temp);
          this.responseText = temp;



          if(this.responseText.length > 0 ){
            this.addBusinessVehicle = true;
         }else{
           this.addBusinessVehicle = false;
                  }

                  var successMessage = " ";
                  var statusMessage  = " ";
                  var userId = " ";
                  var userIdText = " ";
                  if(this.addBusinessUser == true && this.addBusinessVehicle == true){
                    successMessage = $('<p>').text('Your application has been accepted and is being processed right now. You should receive decision within 3 days. Use your ID to login');
                    userId = "<span>" + this.businessUserLoginID + "</span>";
                    userIdText = '<div>User login id: ' + userId +'</div>';
                    statusMessage = "<div id='statusMessage'>Succes!</div>";
                  }else{
                    successMessage = $('<div>').text('Loan registration denied').css('color', 'red');
                  }
                  $('.modal-body').html("");
                  $('.modal-body').append(statusMessage);
                  $('.modal-body').append(successMessage);
                  document.getElementById('modal-bodys').innerHTML += userIdText ; 
                                
        })
      })

  }

  closeModal(){
    $('#confirmationPop').modal('hide');
  }

  toPreviousPage(){
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
