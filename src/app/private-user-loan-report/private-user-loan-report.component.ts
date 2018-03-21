import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../services/data-store.service';

@Component({
  selector: 'app-private-user-loan-report',
  providers: [DataStoreService],
  templateUrl: './private-user-loan-report.component.html',
  styleUrls: ['./private-user-loan-report.component.css']
})
export class PrivateUserLoanReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


}
