import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-input-business-user-info',
  providers: [DataStoreService, RouterModule],
  templateUrl: './input-business-user-info.component.html',
  styleUrls: ['./input-business-user-info.component.css']
})
export class InputBusinessUserInfoComponent implements OnInit {

  public businessUserInputForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.businessUserInputForm = fb.group({
      companyName:null,
      companyCode:null,
      email:null,
      phoneNumber:null,
      adress:null
    })
   }


  reset(){
    this.businessUserInputForm.reset();
  }


   toPreviousPage(){
    console.log("Back");
    this.router.navigate(['/input-loan-info']);
  }


  send(){
    this.router.navigate(['/business-user-loan-report']);
  }
  ngOnInit() {
    let dataStore = new DataStoreService();
  }

}
