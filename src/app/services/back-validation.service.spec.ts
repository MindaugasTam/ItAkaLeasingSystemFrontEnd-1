import { TestBed, inject } from '@angular/core/testing';

import { BackValidationService } from './back-validation.service';

describe('BackValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackValidationService]
    });
  });

  it('should be created', inject([BackValidationService], (service: BackValidationService) => {
    expect(service).toBeTruthy();
  }));
});
