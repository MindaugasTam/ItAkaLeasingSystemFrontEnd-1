import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-private-user-loan-report',
  providers: [DataStoreService],
  templateUrl: './private-user-loan-report.component.html',
  styleUrls: ['./private-user-loan-report.component.css']
})
export class PrivateUserLoanReportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  submit() {
    //this.router.navigate(['/input-private-user-info']);
    console.log("SUBMITTED")
  }

  toPreviousPage(){
    console.log("Back");
    this.router.navigate(['/input-private-user-info']);
  }


}
