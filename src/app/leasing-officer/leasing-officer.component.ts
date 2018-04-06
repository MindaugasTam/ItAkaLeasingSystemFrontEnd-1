import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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

  officerContent;

  selectedCustomer;
  selectedLeasing;

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
  };

  listStatusGroup;

  constructor(fb: FormBuilder, private router: Router, public dataStore: DataStoreService, private modalService: NgbModal,
              public vehicleService: VehicleLoanService) {
    this.officerContent = dataStore.getOfficerContent();
    this.listStatusGroup = fb.group({
      leasingStatusList: null
    })
  }

  get leasingStatusList() {
    return this.listStatusGroup.get('leasingStatusList') as FormControl;
  }

  ngOnInit() {
  }

  closeResult: string;

  updateLoanStatus() {
    let leasingToUpdate = this.selectedLeasing;
    leasingToUpdate.leasingStatus = this.leasingStatusList.value;

    this.vehicleService.updateVehicleLeasingStatus(leasingToUpdate.id, leasingToUpdate)
      .then(data => {
        this.selectedLeasing = leasingToUpdate;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }


  open(content, i, j) {
    this.selectedCustomer = this.officerContent[i]['customer'];
    this.getSelectedCustomerData(this.selectedCustomer);

    this.selectedLeasing = this.officerContent[i]['leasings'][j];

    this.getSelectedLoanData(this.selectedLeasing);

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
      return `with: ${reason}`;
    }
  }

  private getSelectedCustomerData(selectedCustomer) {
    this.customerSummaryData.customerType = selectedCustomer.customerType;
    this.customerSummaryData.userID = selectedCustomer.userID;
    if (this.customerSummaryData.customerType === 'BUSINESS') {
      this.customerSummaryData.customerID = selectedCustomer.companyID;
      this.customerSummaryData.customerNameIdentifier = selectedCustomer.companyName;
    }
    else {
      this.customerSummaryData.customerID = selectedCustomer.privateID;
      this.customerSummaryData.customerNameIdentifier = selectedCustomer.firstName + ' ' + selectedCustomer.lastName;
    }
    this.customerSummaryData.customerEmail = selectedCustomer.email;
    this.customerSummaryData.customerPhone = selectedCustomer.phoneNumber;
    this.customerSummaryData.address = selectedCustomer.address;
    this.customerSummaryData.country = selectedCustomer.country;
  }

  private getSelectedLoanData(selectedLoan) {
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
