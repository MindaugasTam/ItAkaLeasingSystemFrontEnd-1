import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModule } from '@angular/core';

import { BusinessUserLoanReportComponent } from './business-user-loan-report.component';
import { FormGroup } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { InputLoanInfoComponent } from '../input-loan-info/input-loan-info.component';
import { InputBusinessUserInfoComponent } from '../input-business-user-info/input-business-user-info.component';
import { InputPrivateUserInfoComponent } from '../input-private-user-info/input-private-user-info.component';
import { PrivateUserLoanReportComponent } from '../private-user-loan-report/private-user-loan-report.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { DataStoreService } from '../services/data-store.service';
import { VehicleLoanService } from '../services/vehicle-loan.service';
import { UserService } from '../services/private-user.service';

describe('BusinessUserLoanReportComponent', () => {
  let component: BusinessUserLoanReportComponent;
  let fixture: ComponentFixture<BusinessUserLoanReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputLoanInfoComponent,
        InputBusinessUserInfoComponent,
        InputPrivateUserInfoComponent,
        BusinessUserLoanReportComponent,
        PrivateUserLoanReportComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers:[
        {provide:APP_BASE_HREF, useValue:'/'},
        DataStoreService, VehicleLoanService, UserService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUserLoanReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
