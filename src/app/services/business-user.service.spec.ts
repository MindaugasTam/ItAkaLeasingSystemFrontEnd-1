import { TestBed, inject } from '@angular/core/testing';

import { BusinessUserService } from './business-user.service';

describe('BusinessUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessUserService]
    });
  });

  it('should be created', inject([BusinessUserService], (service: BusinessUserService) => {
    expect(service).toBeTruthy();
  }));
});
