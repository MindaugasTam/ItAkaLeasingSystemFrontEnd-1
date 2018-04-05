import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {DataStoreService} from '../services/data-store.service';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.css']
})
export class LoanStatusComponent implements OnInit {
  loanData;

  constructor(private route: ActivatedRoute, public dataStore: DataStoreService) {
    this.loanData = dataStore.getLoanResponse();
  }

  ngOnInit() {
  }


}
