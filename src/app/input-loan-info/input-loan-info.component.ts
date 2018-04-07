import { Component, OnInit,  } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';
import { VehicleList} from '../services/vehicle-list.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
declare var $:any;

@Component({
  selector: 'app-input-loan-info',
  templateUrl: './input-loan-info.component.html',
  styleUrls: ['./input-loan-info.component.css']
})
export class InputLoanInfoComponent implements OnInit {


    public loanForm: FormGroup;
    private userType: String = undefined;
    private minAssetPrice: number = 5000;
    closeResult: string;
    private cars: any;
    private brands: any;
    private models = [];
    private i: number = 0;
    fb: FormBuilder;
    private carList;

  constructor(fb: FormBuilder, private router: Router, public dataStore: DataStoreService,private modalService: NgbModal,
              private vehicleList: VehicleList) {
    vehicleList.getAllVehicleList().then(data => {
      this.initalizeCarLists(data);
    });
    this.fb = fb;
  }

  private initalizeCarLists(data) {
    let dataIt: any;
    dataIt = data;
    let carBrands = [];
    let i = 0;
    for (let carData of dataIt) {
      carBrands[i] = carData.groupValue;
      i++;
    }
    carBrands = Array.from(new Set(carBrands));
    carBrands.sort();
    this.brands = carBrands;
    this.cars = data;
  }

  createForm(userType) { //constructor
    return this.fb.group({
      customerType: [userType, Validators.required],
      assetType: [null, Validators.required],
      carBrand: [null, Validators.required],
      carModel: [null, Validators.required],
      year: [2000, [Validators.required, Validators.minLength(4), Validators.min(2000), Validators.maxLength(4),
        Validators.max(new Date().getFullYear()), Validators.pattern("^[0-9]*$")]],
      enginePower: [0, [Validators.required, Validators.max(1000), Validators.maxLength(3),
        Validators.min(0), Validators.pattern("^[0-9]*$")]],
      assetPrice: [5000, [Validators.required, Validators.min(5000), Validators.max(1000000000), Validators.pattern("^[0-9]*$")]],
      paymentPercentage: [10, [Validators.required, Validators.min(10), Validators.max(100),
        Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]],
      leasePeriod: [48, Validators.required],
      margin: [3.2, [Validators.required, Validators.min(3.2), Validators.max(100), Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]],
      contractFee: [200, [Validators.required, Validators.max(1000000000)]],
      paymentDay: [null, [Validators.required, Validators.min(15), Validators.max(30)]]
    })
  }

  calculateAdvancedPaymentAmount() {
    let firstPaymentPrice = (this.assetPriceValue * (this.paymentPercentageValue / 100));
    return firstPaymentPrice.toFixed(2);
  }

  calculateContractFee() {
    let perc = 0.01;
    let contractFee = this.assetPriceValue * perc;
    if (contractFee < 200) {
      return 200;
    } else return contractFee.toFixed(2);
  }

  findModels() {

    let a = 0;
    this.models = [];

    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].groupValue === this.loanForm.get('carBrand').value) {
        this.models[a] = this.cars[i].value;
        a++;
      }
    }
  }

    get assetType(){return this.loanForm.get('assetType') as FormControl};
    get customerType(){return this.loanForm.get('customerType') as FormControl};
    get year(){return this.loanForm.get('year') as FormControl};
    get paymentAmount(){return this.loanForm.get('paymentAmount') as FormControl};
    get carBrand(){return this.loanForm.get('carBrand') as FormControl};
    get carModel() {return this.loanForm.get('carModel') as FormControl};
    get advancedPaymentAmount(){return this.calculateAdvancedPaymentAmount()};
    get enginePower(){return this.loanForm.get('enginePower') as FormControl};
    get assetPrice(){return this.loanForm.get('assetPrice') as FormControl};
    get paymentDay(){return this.loanForm.get('paymentDay') as FormControl};
    get paymentPercentage(){return this.loanForm.get('paymentPercentage') as FormControl};
    get margin() {return this.loanForm.get('margin') as FormControl};
    get leasePeriod() { return this.loanForm.get('leasePeriod') as FormControl};


    get assetPriceValue(){return this.loanForm.get('assetPrice').value}
    get paymentPercentageValue(){return this.loanForm.get('paymentPercentage').value}

    set assetPriceValue(minAssetPrice){
      this.loanForm.setValue(minAssetPrice);
    }

  send() {
    this.dataStore.saveLoanFormInfo(this.loanForm, this.calculateContractFee(), this.calculateAdvancedPaymentAmount());
    if (this.loanForm.value.customerType === 'Private') {
      this.router.navigate(['/input-private-user-info']);
    } else {
      this.router.navigate(['/input-business-user-info']);
    }
  }

  reset() { // after reset button
    this.userType = undefined;
    this._reset();
  }

  _reset() {
    this.loanForm = this.createForm(this.userType);
    this.loanForm.updateValueAndValidity;
  }



  ngOnInit() {
    this.loanForm = this.createForm(this.userType);
    if (this.dataStore.loanFormInfo) {

      this.loanForm = this.dataStore.getLoanForm();
      this.vehicleList.getAllVehicleList().then(data => {
        this.initalizeCarLists(data);
        this.findModels()
      });
    }
  }

  userTypeChange(userTypeT: string) {
    this.userType = userTypeT;  // "Private" or "Business"
    this._reset();
    this.loanForm.patchValue({"assetPrice": this.findMinAssetPrice()})
    this.loanForm.controls['assetPrice'].setValidators([Validators.required, Validators.min(this.findMinAssetPrice()), Validators.pattern("^[0-9]*$")]);
    this.loanForm.controls['assetPrice'].updateValueAndValidity();
  }

  findMinAssetPrice() {
    if (this.userType === "Private") {
      this.minAssetPrice = 5000;
      return this.minAssetPrice;
    }
    if (this.userType === "Business") {
      this.minAssetPrice = 10000;
      return this.minAssetPrice;
    }
  }

  monthlyPayment: any;
  monthlyPaymentData = [];
  totalInterestSum: any;
  totalPaymentSum: any;
  financingAmount;

  calculatePaySchedule() {

    this.totalInterestSum = 0;

    let advancePayment = +this.calculateAdvancedPaymentAmount();

    let marginVal = (this.margin.value/100)/12;
    let divisor = (1 - (1/Math.pow(1 + marginVal, this.leasePeriod.value)))/marginVal;

    this.monthlyPayment = (this.assetPrice.value - advancePayment)/divisor;

    let remainingAmount = this.assetPrice.value - advancePayment;
    this.financingAmount = remainingAmount;

    this.totalPaymentSum = +this.calculateContractFee() + advancePayment;

    let dates = this.findPaymentDates(this.leasePeriod.value, this.paymentDay.value);

    this.monthlyPaymentData[0] = {
      paymentDate: 'Initial',
      remainingAmount: this.assetPriceValue,
      interestPaymentAmount: 0,
      assetValuePaymentAmount: this.advancedPaymentAmount,
      monthlyPayment: this.totalPaymentSum
    };
    for(let month = 1; month <= this.leasePeriod.value; month++){

      let withInterest = (remainingAmount * (1 + marginVal));
      let interestPaymentAmount = withInterest - remainingAmount;
      let assetValuePaymentAmount = (this.monthlyPayment - interestPaymentAmount);

      this.totalInterestSum+=interestPaymentAmount;
      this.totalPaymentSum+=this.monthlyPayment;

      this.monthlyPaymentData[month] = {
        paymentDate: dates[month],
        remainingAmount: remainingAmount.toFixed(2),
        interestPaymentAmount: interestPaymentAmount.toFixed(2),
        assetValuePaymentAmount: assetValuePaymentAmount.toFixed(2),
        monthlyPayment: this.monthlyPayment.toFixed(2)
      };
      remainingAmount-= assetValuePaymentAmount;
    }
  }

  private static isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }


  private findPaymentDates(leasePeriod, paymentDay){
    let paymentDates = [];
    let startDate = new Date();

    if((startDate.getMonth() == 1) && (paymentDay > 28)){
      if(InputLoanInfoComponent.isLeapYear(startDate.getFullYear())){
        startDate.setDate(29);
      }
      else{
        startDate.setDate(28);
      }
    }
    else{
      if(startDate.getDay() > paymentDay){
        startDate.setMonth(startDate.getMonth() + 1);
      }
      startDate.setDate(paymentDay);
      paymentDates[0] = startDate.toISOString().split('T')[0];
    }

    startDate.setDate(1);
    for (let i = 1; i <= leasePeriod; i++){
      startDate.setMonth(startDate.getMonth() + 1);

      if((startDate.getMonth() == 1) && (paymentDay > 28)){
        if(InputLoanInfoComponent.isLeapYear(startDate.getFullYear())){
          startDate.setDate(29);
        }
        else {
          startDate.setDate(28);
        }
      }
      else{
        startDate.setDate(paymentDay);
      }
      paymentDates[i] = startDate.toISOString().split('T')[0];
      startDate.setDate(1);
    }
    return paymentDates;
  }
  rangeSlider(){

    var abs = 42;
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');



    slider.each(function(){

      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });

      range.on('input', function(){
        $(this).next(value).html(this.value);
      });
    });
  };

  open(content){
    this.calculatePaySchedule();
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
}
