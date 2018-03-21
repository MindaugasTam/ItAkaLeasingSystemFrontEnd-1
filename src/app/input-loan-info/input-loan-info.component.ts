import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-input-loan-info',
  providers: [DataStoreService, RouterModule],
  templateUrl: './input-loan-info.component.html',
  styleUrls: ['./input-loan-info.component.css']
})
export class InputLoanInfoComponent implements OnInit {

    public loanForm: FormGroup;

    constructor(fb: FormBuilder, private router: Router ){
      this.loanForm = fb.group({
        customerType:null, //<--[null, Validators.required]
        assetType:null,
        carBrand:null,
        carModel:null,
        enginePowe:null,
        assetPrice:null,
        paymentPercentage:null,
        paymentAmount:null,
        leasePeriod:null,
        margin:null,
        contractFee:null,
        paymentDay:null
      })
    }

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
