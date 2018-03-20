import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../services/data-store.service';

@Component({
  selector: 'app-input-loan-info',
  providers: [DataStoreService],
  templateUrl: './input-loan-info.component.html',
  styleUrls: ['./input-loan-info.component.css']
})
export class InputLoanInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let dataStore = new DataStoreService();
    console.log(dataStore.getLeasingInfo());
  }

}
