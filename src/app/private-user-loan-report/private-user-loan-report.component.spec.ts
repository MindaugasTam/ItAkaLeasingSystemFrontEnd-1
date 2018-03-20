import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateUserLoanReportComponent } from './private-user-loan-report.component';

describe('PrivateUserLoanReportComponent', () => {
  let component: PrivateUserLoanReportComponent;
  let fixture: ComponentFixture<PrivateUserLoanReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateUserLoanReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateUserLoanReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
