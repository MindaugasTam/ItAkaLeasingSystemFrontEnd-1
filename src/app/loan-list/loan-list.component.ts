import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { FormControl, FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Http, Response } from '@angular/http';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})



export class LoanListComponent implements OnInit {
  fb: FormBuilder;
  loans: [{
    date: string,
    veachleBrand: string,
    veachleModel: string,
    summary: string,
    status: string
  }];
  constructor(fb: FormBuilder, private router: Router,  public dataStore : DataStoreService ) {
    //Demonstration data
    this.loans =[{
      date: "2018-01-02",
      veachleBrand: "Audi",
      veachleModel: "Q7",
      summary: "27624",
      status: "Valid"
    }]
  }

  ngOnInit() {
  }
}
