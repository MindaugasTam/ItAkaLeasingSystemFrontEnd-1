import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-private-user-info',
  templateUrl: './input-private-user-info.component.html',
  styleUrls: ['./input-private-user-info.component.css']
})
export class InputPrivateUserInfoComponent implements OnInit {

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
  
  
  

  ngOnInit() {
  }

}
