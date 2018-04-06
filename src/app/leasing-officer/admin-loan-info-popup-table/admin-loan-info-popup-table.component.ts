import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-popup-table-component',
  templateUrl: './admin-loan-info-popup-tablet.component.html',
  styleUrls: ['./admin-loan-info-popup-table.component.css']
})
export class PopupComponentComponent implements OnInit {
  @Input() leasingData: any;
  constructor() { }

  ngOnInit() {
  }

}
