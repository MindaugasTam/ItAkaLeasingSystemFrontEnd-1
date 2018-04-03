import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataStoreService } from '../services/data-store.service';
import { NgModule } from '@angular/core';
import { PrivateUserLoanReportComponent } from './private-user-loan-report.component';
import { AppComponent } from '../app.component';
import { InputLoanInfoComponent } from '../input-loan-info/input-loan-info.component';
import { InputBusinessUserInfoComponent } from '../input-business-user-info/input-business-user-info.component';
import { InputPrivateUserInfoComponent } from '../input-private-user-info/input-private-user-info.component';
import { BusinessUserLoanReportComponent } from '../business-user-loan-report/business-user-loan-report.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { PrivateUserService } from '../services/private-user.service';
import { VehicleLoanService } from '../services/vehicle-loan.service';
import { BusinessUserService } from '../services/business-user.service';

describe('PrivateUserLoanReportComponent', () => {
  let component: PrivateUserLoanReportComponent;
  let fixture: ComponentFixture<PrivateUserLoanReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputLoanInfoComponent ,
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
        DataStoreService, VehicleLoanService, PrivateUserService, BusinessUserService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateUserLoanReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



});
