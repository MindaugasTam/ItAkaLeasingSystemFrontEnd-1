import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputLoanInfoComponent } from './input-loan-info/input-loan-info.component';
import { InputBusinessUserInfoComponent } from './input-business-user-info/input-business-user-info.component';
import { InputPrivateUserInfoComponent } from './input-private-user-info/input-private-user-info.component';
import { BusinessUserLoanReportComponent } from './business-user-loan-report/business-user-loan-report.component';
import { PrivateUserLoanReportComponent } from './private-user-loan-report/private-user-loan-report.component';

import {DataStoreService} from './services/data-store.service';
import {PrivateUserService} from './services/private-user.service';
import {VehicleLoanService} from './services/vehicle-loan.service';
import {BusinessUserService} from './services/business-user.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './services/login.service';
import { MenuComponent } from './menu/menu.component';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { VehicleList } from './services/vehicle-list.service';
import { LoanListComponent } from './loan-list/loan-list.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {BackValidationService} from './services/back-validation.service';

@NgModule({
  declarations: [
    AppComponent,
    InputLoanInfoComponent,
    InputBusinessUserInfoComponent,
    InputPrivateUserInfoComponent,
    BusinessUserLoanReportComponent,
    PrivateUserLoanReportComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    LoanStatusComponent,
    ChangePasswordComponent,
    LoanListComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AppComponent, DataStoreService, PrivateUserService, BusinessUserService, BackValidationService,
    VehicleLoanService, LoginService, VehicleList],
  bootstrap: [AppComponent]
})
export class AppModule { }
