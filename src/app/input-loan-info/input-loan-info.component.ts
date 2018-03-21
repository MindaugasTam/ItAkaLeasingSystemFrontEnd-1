import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-input-loan-info',
  providers: [DataStoreService, RouterModule],
  templateUrl: './input-loan-info.component.html',
  styleUrls: ['./input-loan-info.component.css'],
  styles:['input.ng-invalid {border:3px solid red}']
})
export class InputLoanInfoComponent implements OnInit {

    public loanForm: FormGroup;

    constructor(fb: FormBuilder, private router: Router ){
      this.loanForm = fb.group({
        customerType:['Private', Validators.required],
        assetType:['Vehicle', Validators.required],
        carBrand:['Not selected', Validators.required],
        carModel:['Not selected', Validators.required],
        year: [2000, [Validators.required, Validators.minLength(4), Validators.min(2000), Validators.maxLength(4), Validators.max(new Date().getFullYear())]],
        enginePower:[0, [Validators.required, Validators.max(999), Validators.maxLength(3), Validators.min(0)]],
        assetPrice:[5000, [Validators.required, Validators.min(5000)]],
        paymentPercentage:[10, [Validators.required, Validators.min(10), Validators.max(100)]],
        leasePeriod:[12, Validators.required],
        margin:[10, Validators.required],
        contractFee:[200, Validators.required],
        paymentDay:[15, Validators.required]
      })

    }

    calculateAdvancedPaymentAmount(){
      let firstPaymentPrice=(this.assetPriceValue*(this.paymentPercentageValue/100));
      return firstPaymentPrice;
    }

    calculateContractFee(){
      let perc = 0.01;
      let contractFee = this.assetPriceValue*perc;
      if(contractFee<200){
        return 200;
      }else return contractFee;
    }

    get assetType(){return this.loanForm.get('assetType') as FormControl};
    get customerType(){return this.loanForm.get('customerType') as FormControl};
    get year(){return this.loanForm.get('year') as FormControl};
    get paymentAmount(){return this.loanForm.get('paymentAmount') as FormControl};
    get carBrand(){return this.loanForm.get('carBrand') as FormControl};
    get advancedPaymentAmount(){return this.advancedPaymentAmount};
    get enginePower(){return this.loanForm.get('enginePower') as FormControl};
    get assetPrice(){return this.loanForm.get('assetPrice') as FormControl};
    get paymentDay(){return this.loanForm.get('paymentDay') as FormControl};
    get paymentPercentage(){return this.loanForm.get('paymentPercentage') as FormControl};


    get assetPriceValue(){return this.loanForm.get('assetPrice').value}
    get paymentPercentageValue(){return this.loanForm.get('paymentPercentage').value}


    send(){
      //validuojam, irasom i datastore service
      console.log(this.loanForm.value);
      if(this.loanForm.value.customerType==='Private'){
          this.router.navigate(['/input-private-user-info']);
      }else {
          this.router.navigate(['/input-business-user-info']);
      }
    }

    reset(){
      this.loanForm.reset();
    }

  ngOnInit() {
    let dataStore = new DataStoreService();
  }

}
