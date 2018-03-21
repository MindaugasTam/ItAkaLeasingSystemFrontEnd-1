import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
=======
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
>>>>>>> 6f5154b508b6af337bb55d045f6c4720d553dbf8

@Component({
  selector: 'app-input-business-user-info',
  templateUrl: './input-business-user-info.component.html',
  styleUrls: ['./input-business-user-info.component.css']
})
export class InputBusinessUserInfoComponent implements OnInit {

<<<<<<< HEAD
  private businessUser: FormGroup;
=======
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
>>>>>>> 6f5154b508b6af337bb55d045f6c4720d553dbf8

  constructor(fb: FormBuilder, private router: Router ) {
    this.businessUser=fb.group({

    });
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
