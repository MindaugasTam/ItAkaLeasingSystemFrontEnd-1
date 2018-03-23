import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModule } from '@angular/core';

import { BusinessUserLoanReportComponent } from './business-user-loan-report.component';
import { FormGroup } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

describe('BusinessUserLoanReportComponent', () => {
  let component: BusinessUserLoanReportComponent;
  let fixture: ComponentFixture<BusinessUserLoanReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUserLoanReportComponent],
      imports:[AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUserLoanReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
