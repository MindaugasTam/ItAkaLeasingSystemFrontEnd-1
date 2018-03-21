import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputLoanInfoComponent } from './input-loan-info.component';

describe('InputLoanInfoComponent', () => {
  let component: InputLoanInfoComponent;
  let fixture: ComponentFixture<InputLoanInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLoanInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLoanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
