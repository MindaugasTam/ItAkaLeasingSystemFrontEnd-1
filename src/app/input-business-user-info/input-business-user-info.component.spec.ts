import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBusinessUserInfoComponent } from './input-business-user-info.component';
import { AppComponent } from '../app.component';
import { InputLoanInfoComponent } from '../input-loan-info/input-loan-info.component';
import { InputPrivateUserInfoComponent } from '../input-private-user-info/input-private-user-info.component';
import { BusinessUserLoanReportComponent } from '../business-user-loan-report/business-user-loan-report.component';
import { PrivateUserLoanReportComponent } from '../private-user-loan-report/private-user-loan-report.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { DataStoreService } from '../services/data-store.service';

describe('InputBusinessUserInfoComponent', () => {
  let component: InputBusinessUserInfoComponent;
  let fixture: ComponentFixture<InputBusinessUserInfoComponent>;

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
        DataStoreService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBusinessUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is form valid when empty',()=>{
    let companyName = component.businessUserInputForm.controls["companyName"];
    companyName.setValue("");
    let companyCode = component.businessUserInputForm.controls["companyCode"];
    companyCode.setValue("");
    let email = component.businessUserInputForm.controls["email"];
    email.setValue("");
    let phoneNumber = component.businessUserInputForm.controls["phoneNumber"];
    phoneNumber.setValue("");
    let address = component.businessUserInputForm.controls["address"];
    address.setValue("");

    expect(component.businessUserInputForm.invalid).toBeTruthy();
  })

  it('is form invalid when email is badly formated',()=>{
    let companyName = component.businessUserInputForm.controls["companyName"];
    companyName.setValue("Traidenis");
    let companyCode = component.businessUserInputForm.controls["companyCode"];
    companyCode.setValue("565464575476435");
    let email = component.businessUserInputForm.controls["email"];
    email.setValue("traidenis");
    let phoneNumber = component.businessUserInputForm.controls["phoneNumber"];
    phoneNumber.setValue("432525432");
    let address = component.businessUserInputForm.controls["address"];
    address.setValue("Vilnius, sv. stepono 22-43");

    expect(component.businessUserInputForm.valid).toBeFalsy();
    expect(component.businessUserInputForm.controls["email"].valid).toBeFalsy();
    expect(email.errors["email"]).toBeDefined();
  })
});
