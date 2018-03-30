import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';

import { BusinessUserService } from './business-user.service';
import { AppComponent } from '../app.component';
import { InputLoanInfoComponent } from '../input-loan-info/input-loan-info.component';
import { InputBusinessUserInfoComponent } from '../input-business-user-info/input-business-user-info.component';
import { InputPrivateUserInfoComponent } from '../input-private-user-info/input-private-user-info.component';
import { BusinessUserLoanReportComponent } from '../business-user-loan-report/business-user-loan-report.component';
import { PrivateUserLoanReportComponent } from '../private-user-loan-report/private-user-loan-report.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { DataStoreService } from './data-store.service';
import { PrivateUserService } from './private-user.service';
import { VehicleLoanService } from './vehicle-loan.service';

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

  it('should be created', inject([BusinessUserService], (service: BusinessUserService) => {
    expect(service).toBeTruthy();
  }));
