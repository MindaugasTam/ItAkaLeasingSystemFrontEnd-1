import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-input-private-user-info',
  templateUrl: './input-private-user-info.component.html',
  styleUrls: ['./input-private-user-info.component.css']
})
export class InputPrivateUserInfoComponent implements OnInit {

  public privateUserInfoForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.privateUserInfoForm = fb.group({
      firstName: null,
      lastName: null,
      privateID: null,
      email: null,
      phoneNumber: null,
      adress: null
    })
  }
  send() {
    console.log(this.privateUserInfoForm.value);
    this.router.navigate(['/private-user-loan-report']);
  }

  reset(){
    this.privateUserInfoForm.reset();
  }

  ngOnInit() {
    let dataStore = new DataStoreService();
  }

}
