import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {DataStoreService} from '../services/data-store.service';
import {PrivateUserService} from '../services/private-user.service';
import {VehicleLoanService} from '../services/vehicle-loan.service';
declare var $:any;

@Component({
  selector: 'app-private-user-loan-report',
  templateUrl: './private-user-loan-report.component.html',
  styleUrls: ['./private-user-loan-report.component.css']
})
export class PrivateUserLoanReportComponent implements OnInit {
  responseText : String;
  addPrivateUser : Boolean;
  addPrivateVehicle : Boolean;

  firstName = this.dataStore.getPrivateUserData().firstName;
  lastName = this.dataStore.getPrivateUserData().lastName;
  address = this.dataStore.getPrivateUserData().address;
  email = this.dataStore.getPrivateUserData().email;
  phoneNumber = this.dataStore.getPrivateUserData().phoneNumber;
  privateID = this.dataStore.getPrivateUserData().privateID;
  country = this.dataStore.getPrivateUserData().country;

  userInfo = this.dataStore.getPrivateUserData();
  loanInfo = this.dataStore.getLoanFormInfo();
  contractFee = this.dataStore.getContractFee();
  advancedPaymentAmount = this.dataStore.getAdvancedPaymentAmount();

  privateUserID = null;
  privateUserLoginID = null;

  @Output()
  newPrivateUser = new EventEmitter<Object>();

  @Output()
  newVehicleLoan = new EventEmitter<Object>();

  constructor(private router: Router, private dataStore: DataStoreService,
              private privateUserService: PrivateUserService,
              private vehicleLoanService: VehicleLoanService) {
  }

  ngOnInit() {

  }

  submit() {
    //this.router.navigate(['/input-private-user-info']);

    this.addPrivateUserToDB()
      .then(data => {
        this.newPrivateUser.emit(data);
        let temp = JSON.stringify(data);
        let parseTemp = JSON.parse(temp);
        this.responseText = temp;
        this.privateUserID = parseTemp.id;
        this.privateUserLoginID = parseTemp.userID;
        if(this.responseText.length > 0 ){
          this.addPrivateUser = true;
       }else{
         this.addPrivateUser = false;
                }
      })
      .then(() => {
        this.addVehicleLoanToDB().then(data => {
          this.newVehicleLoan.emit(data);
          let temp = JSON.stringify(data);
          let parseTemp = JSON.parse(temp);
          this.responseText = temp;



          if(this.responseText.length > 0 ){
            this.addPrivateVehicle = true;
         }else{
           this.addPrivateVehicle = false;
                  }
                  console.log(this.addPrivateUser + "add business user");
                  console.log(this.addPrivateVehicle + "add business vehicle");
                  console.log(temp);

                  var successMessage = " ";
                  if(this.addPrivateUser == true && this.addPrivateVehicle == true){
                    successMessage = $('<div>').text('Loan registration successful\n User login id: '
                    + this.privateUserLoginID).css('color', 'green');
                  }else{
                    successMessage = $('<div>').text('Loan registration denied').css('color', 'red');
                  }

                  $('.modal-footer').html(successMessage);
                  window.setTimeout(function() {
                  $('#exampleModal').modal('hide'); }, 5000);
                  console.log("asdsasad");

        })
      })
  }

  toPreviousPage() {
    this.router.navigate(['/input-private-user-info']);
  }

  addPrivateUserToDB() {
    return this.privateUserService.createPrivateUser(this.firstName, this.lastName, this.privateID, this.email,
      this.phoneNumber, this.address, this.country);
  }

  addVehicleLoanToDB() {
    let loanForm = this.dataStore.getLoanFormInfo();
    return this.vehicleLoanService.createVehicleLeasing(
      loanForm.carBrand, loanForm.carModel, loanForm.year, loanForm.enginePower,
      loanForm.paymentPercentage, this.advancedPaymentAmount, loanForm.leasePeriod,
      loanForm.margin, this.contractFee, loanForm.assetPrice, loanForm.paymentDay, this.privateUserID);
  }

}
