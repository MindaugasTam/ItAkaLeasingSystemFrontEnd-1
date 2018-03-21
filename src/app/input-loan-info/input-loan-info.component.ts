import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-input-loan-info',
  providers: [DataStoreService, RouterModule],
  templateUrl: './input-loan-info.component.html',
  styleUrls: ['./input-loan-info.component.css'],
  styles:['input.ng-invalid {border-color:red}']
})
export class InputLoanInfoComponent implements OnInit {

    public loanForm: FormGroup;

    constructor(fb: FormBuilder, private router: Router ){
      this.loanForm = fb.group({
        customerType:[null, Validators.required],
        assetType:[null, Validators.required],
        carBrand:[null, Validators.required],
        carModel:[null, Validators.required],
        enginePower:[0, Validators.required],
        assetPrice:[null, Validators.required],
        paymentPercentage:[null, Validators.required],
        paymentAmount:[null, Validators.required],
        leasePeriod:[null, Validators.required],
        margin:[null, Validators.required],
        contractFee:[null, Validators.required],
        paymentDay:[null, Validators.required]
      })
    }

    get customerType(){return this.loanForm.get('customerType') as FormControl};

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
