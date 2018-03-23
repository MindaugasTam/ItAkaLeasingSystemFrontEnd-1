import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputLoanInfoComponent } from './input-loan-info.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InputLoanInfoComponent', () => {
  let component: InputLoanInfoComponent;
  let fixture: ComponentFixture<InputLoanInfoComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLoanInfoComponent ]
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

  beforeEach(()=>{
    fixture = TestBed.createComponent(InputLoanInfoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('period'));
    htmlElement = debugElement.nativeElement;
  });
  it('should number input in incraments of 6 months',()=>{
    expect(htmlElement.textContent).toBeGreaterThan(5);
  })
});
