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

  constructor(public router: Router) { }

  ngOnInit() {
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
