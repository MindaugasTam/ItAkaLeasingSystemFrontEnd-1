import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BusinessUserService} from '../services/business-user.service';
import {VehicleLoanService} from '../services/vehicle-loan.service';
import {DataStoreService} from '../services/data-store.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leasing-officer',
  templateUrl: './leasing-officer.component.html',
  styleUrls: ['./leasing-officer.component.css']
})
export class LeasingOfficerComponent implements OnInit {

  public leasingOfficerForm: FormGroup;

  officerContent;
  allLeasings = [];

  customerSummaryData = {
    userID: null,
    customerType: null,
    customerID: null,
    customerNameIdentifier: null,
    customerEmail: null,
    customerPhone: null,
    address: null,
    country: null,
  };

  leasingSummaryData = {
    advancePaymentAmount: null,
    advancePaymentPercent: null,
    assetPrice: null,
    contractFee: null,
    enginePower: null,
    leasingPeriod: null,
    manufacturer: null,
    model: null,
    manufacturingDate: null,
    margin: null,
    paymentDate: null,
    submissionDate: null,
    leasingStatus: null
  }


  constructor(fb: FormBuilder, private router: Router, public dataStore: DataStoreService, private modalService: NgbModal) {
    this.officerContent = dataStore.getOfficerContent();
  }

  ngOnInit() {
    for(let data of this.officerContent){
      console.log(data);
      for(let leasing of data['leasings']){
          this.allLeasings.push(leasing);
      }
    }
  }

  closeResult: string;


  open(content, i, j){
    let selectedCustomer = this.officerContent[i]['customer'];
    this.getSelectedCustomerData(selectedCustomer);

    let selectedLoan = this.officerContent[i]['leasings'][j];
    this.getSelectedLoanData(selectedLoan);

    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private getSelectedCustomerData(selectedCustomer){
    this.customerSummaryData.customerType = selectedCustomer.customerType;
    this.customerSummaryData.userID = selectedCustomer.userID;
    if(this.customerSummaryData.customerType === 'BUSINESS'){
      this.customerSummaryData.customerID = selectedCustomer.companyID;
      this.customerSummaryData.customerNameIdentifier = selectedCustomer.companyName;
    }
    else{
      this.customerSummaryData.customerID = selectedCustomer.privateID;
      this.customerSummaryData.customerNameIdentifier = selectedCustomer.firstName + " " + selectedCustomer.lastName;
    }
    this.customerSummaryData.customerEmail = selectedCustomer.email;
    this.customerSummaryData.customerPhone = selectedCustomer.phoneNumber;
    this.customerSummaryData.address = selectedCustomer.address;
    this.customerSummaryData.country = selectedCustomer.country;
  }

  private getSelectedLoanData(selectedLoan){
    this.leasingSummaryData.advancePaymentAmount = selectedLoan.advancePaymentAmount;
    this.leasingSummaryData.advancePaymentPercent = selectedLoan.advancePaymentPercent;
    this.leasingSummaryData.assetPrice = selectedLoan.assetPrice;
    this.leasingSummaryData.contractFee = selectedLoan.contractFee;
    this.leasingSummaryData.enginePower = selectedLoan.enginePower;
    this.leasingSummaryData.leasingPeriod = selectedLoan.leasingPeriod;
    this.leasingSummaryData.manufacturer = selectedLoan.manufacturer;
    this.leasingSummaryData.model = selectedLoan.model;
    this.leasingSummaryData.manufacturingDate = selectedLoan.manufacturingDate;
    this.leasingSummaryData.margin = selectedLoan.margin;
    this.leasingSummaryData.paymentDate = selectedLoan.paymentDate;
    this.leasingSummaryData.submissionDate = selectedLoan.submissionDate;
    this.leasingSummaryData.leasingStatus = selectedLoan.leasingStatus;
  }
}
