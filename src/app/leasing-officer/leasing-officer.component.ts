import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BusinessUserService} from '../services/business-user.service';
import {VehicleLoanService} from '../services/vehicle-loan.service';
import {DataStoreService} from '../services/data-store.service';

@Component({
  selector: 'app-leasing-officer',
  templateUrl: './leasing-officer.component.html',
  styleUrls: ['./leasing-officer.component.css']
})
export class LeasingOfficerComponent implements OnInit {

  public leasingOfficerForm: FormGroup;

  officerContent;

  constructor(fb: FormBuilder, private router: Router, public dataStore: DataStoreService) {
    this.officerContent = dataStore.getOfficerContent();
  }

  ngOnInit() {
    console.log(this.officerContent);
  }

}
