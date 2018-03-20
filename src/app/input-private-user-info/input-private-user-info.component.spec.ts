import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrivateUserInfoComponent } from './input-private-user-info.component';

describe('InputPrivateUserInfoComponent', () => {
  let component: InputPrivateUserInfoComponent;
  let fixture: ComponentFixture<InputPrivateUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPrivateUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPrivateUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
