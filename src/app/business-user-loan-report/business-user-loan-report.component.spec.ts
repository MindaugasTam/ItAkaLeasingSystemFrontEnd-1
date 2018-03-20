import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUserLoanReportComponent } from './business-user-loan-report.component';

describe('BusinessUserLoanReportComponent', () => {
  let component: BusinessUserLoanReportComponent;
  let fixture: ComponentFixture<BusinessUserLoanReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUserLoanReportComponent ]
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
