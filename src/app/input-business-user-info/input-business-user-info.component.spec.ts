import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBusinessUserInfoComponent } from './input-business-user-info.component';

describe('InputBusinessUserInfoComponent', () => {
  let component: InputBusinessUserInfoComponent;
  let fixture: ComponentFixture<InputBusinessUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBusinessUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBusinessUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
