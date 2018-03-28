import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public changeForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
     this.changeForm = fb.group({
        oldPass: [null, [Validators.required, Validators.maxLength(20)] ],
        newPass: [null, [Validators.required, Validators.maxLength(20)] ]
     })
   }

  ngOnInit() {
  }

}
