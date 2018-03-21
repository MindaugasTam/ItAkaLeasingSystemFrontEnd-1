import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-input-business-user-info',
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
   send() {
    console.log(this.businessUserInputForm.value);
    this.router.navigate(['/input-business-user-info']);
  }

  reset(){
    this.businessUserInputForm.reset();
  }

  ngOnInit() {
    let dataStore = new DataStoreService();
  }

}
