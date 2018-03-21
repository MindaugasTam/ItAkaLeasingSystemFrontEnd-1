import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
=======
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
>>>>>>> 6f5154b508b6af337bb55d045f6c4720d553dbf8

@Component({
  selector: 'app-input-private-user-info',
  templateUrl: './input-private-user-info.component.html',
  styleUrls: ['./input-private-user-info.component.css']
})
export class InputPrivateUserInfoComponent implements OnInit {

<<<<<<< HEAD
public privateUser: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.privateUser=fb.group({
    })
   }

  toPreviousPage(){
    console.log("Back");
    this.router.navigate(['/input-loan-info']);
  }

  send(){
    console.log("Send");
    this.router.navigate(['/private-user-loan-report']);
  }
  
  
  
=======
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
>>>>>>> 6f5154b508b6af337bb55d045f6c4720d553dbf8

  ngOnInit() {
    let dataStore = new DataStoreService();
  }

}
