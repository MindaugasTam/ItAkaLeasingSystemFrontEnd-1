import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-business-user-info',
  templateUrl: './input-business-user-info.component.html',
  styleUrls: ['./input-business-user-info.component.css']
})
export class InputBusinessUserInfoComponent implements OnInit {

  private businessUser: FormGroup;

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
  }

}
