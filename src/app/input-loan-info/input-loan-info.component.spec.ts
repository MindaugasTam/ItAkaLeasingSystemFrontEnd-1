import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputLoanInfoComponent } from './input-loan-info.component';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { InputBusinessUserInfoComponent } from '../input-business-user-info/input-business-user-info.component';
import { InputPrivateUserInfoComponent } from '../input-private-user-info/input-private-user-info.component';
import { BusinessUserLoanReportComponent } from '../business-user-loan-report/business-user-loan-report.component';
import { PrivateUserLoanReportComponent } from '../private-user-loan-report/private-user-loan-report.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { DataStoreService } from '../services/data-store.service';
import { VehicleLoanService } from '../services/vehicle-loan.service';
import { PrivateUserService } from '../services/private-user.service';
import { BusinessUserService } from '../services/business-user.service';

describe('InputLoanInfoComponent', () => {
  let component: InputLoanInfoComponent;
  let fixture: ComponentFixture<InputLoanInfoComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

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
        DataStoreService, VehicleLoanService, PrivateUserService, BusinessUserService
      ]
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(InputLoanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is form valid when empty',()=>{
    let customerType = component.loanForm.controls["customerType"];
    customerType.setValue("");
    let assetType = component.loanForm.controls["assetType"];
    assetType.setValue("");
    let carBrand = component.loanForm.controls["carBrand"];
    carBrand.setValue("");
    let carModel = component.loanForm.controls["carModel"];
    carModel.setValue("");
    let year = component.loanForm.controls["year"];
    year.setValue("");
    let enginePower = component.loanForm.controls["enginePower"];
    enginePower.setValue("");
    let assetPrice = component.loanForm.controls["assetPrice"];
    assetPrice.setValue("");
    let paymentPercentage = component.loanForm.controls["paymentPercentage"];
    paymentPercentage.setValue("");
    let leasePeriod = component.loanForm.controls["leasePeriod"];
    leasePeriod.setValue("");
    let margin = component.loanForm.controls["margin"];
    margin.setValue("");
    let contractFee = component.loanForm.controls["contractFee"];
    contractFee.setValue("");
    let paymentDay = component.loanForm.controls["paymentDay"];
    paymentDay.setValue("");

    expect(component.loanForm.invalid).toBeTruthy();
  })

  it('is form invalid when year is more than year today.',()=>{
    let customerType = component.loanForm.controls["customerType"];
    customerType.setValue("Private");
    let assetType = component.loanForm.controls["assetType"];
    assetType.setValue("Vehicle");
    let carBrand = component.loanForm.controls["carBrand"];
    carBrand.setValue("Audi");
    let carModel = component.loanForm.controls["carModel"];
    carModel.setValue("A1");
    let year = component.loanForm.controls["year"];
    year.setValue("2020");
    let enginePower = component.loanForm.controls["enginePower"];
    enginePower.setValue("999");
    let assetPrice = component.loanForm.controls["assetPrice"];
    assetPrice.setValue("5000");
    let paymentPercentage = component.loanForm.controls["paymentPercentage"];
    paymentPercentage.setValue("10");
    let leasePeriod = component.loanForm.controls["leasePeriod"];
    leasePeriod.setValue("36");
    let margin = component.loanForm.controls["margin"];
    margin.setValue("3.2");
    let contractFee = component.loanForm.controls["contractFee"];
    contractFee.setValue("500");
    let paymentDay = component.loanForm.controls["paymentDay"];
    paymentDay.setValue("15");

    expect(component.loanForm.valid).toBeFalsy();
    expect(component.loanForm.controls["year"].valid).toBeFalsy();
    expect(year.errors["max"]).toBeDefined();
  })

  it('is form calculating advanced payment amount correctly',()=>{
    let customerType = component.loanForm.controls["customerType"];
    customerType.setValue("Private");
    let assetType = component.loanForm.controls["assetType"];
    assetType.setValue("Vehicle");
    let carBrand = component.loanForm.controls["carBrand"];
    carBrand.setValue("Audi");
    let carModel = component.loanForm.controls["carModel"];
    carModel.setValue("A1");
    let year = component.loanForm.controls["year"];
    year.setValue("2020");
    let enginePower = component.loanForm.controls["enginePower"];
    enginePower.setValue("999");
    let assetPrice = component.loanForm.controls["assetPrice"];
    assetPrice.setValue("5000");
    let paymentPercentage = component.loanForm.controls["paymentPercentage"];
    paymentPercentage.setValue("10");
    let leasePeriod = component.loanForm.controls["leasePeriod"];
    leasePeriod.setValue("36");
    let margin = component.loanForm.controls["margin"];
    margin.setValue("3.2");
    let contractFee = component.loanForm.controls["contractFee"];
    contractFee.setValue("500");
    let paymentDay = component.loanForm.controls["paymentDay"];
    paymentDay.setValue("15");

    let firstPaymentPrice = component.calculateAdvancedPaymentAmount();

    expect(component.calculateAdvancedPaymentAmount()).toBe(500);
    expect(component.calculateAdvancedPaymentAmount()).toBeDefined;
  })

});
