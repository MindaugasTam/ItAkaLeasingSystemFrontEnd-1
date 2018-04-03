import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { InputBusinessUserInfoComponent } from '../input-business-user-info/input-business-user-info.component';
import { BusinessUserLoanReportComponent } from '../business-user-loan-report/business-user-loan-report.component';
import { PrivateUserLoanReportComponent } from '../private-user-loan-report/private-user-loan-report.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { DataStoreService } from '../services/data-store.service';

import { InputPrivateUserInfoComponent } from './input-private-user-info.component';
import { InputLoanInfoComponent } from '../input-loan-info/input-loan-info.component';
import { VehicleLoanService } from '../services/vehicle-loan.service';
import { PrivateUserService } from '../services/private-user.service';
import { BusinessUserService } from '../services/business-user.service';

describe('InputPrivateUserInfoComponent', () => {
  let component: InputPrivateUserInfoComponent;
  let fixture: ComponentFixture<InputPrivateUserInfoComponent>;

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
    fixture = TestBed.createComponent(InputPrivateUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
