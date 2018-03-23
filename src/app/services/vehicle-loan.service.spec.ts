import { TestBed, inject } from '@angular/core/testing';

import { VehicleLoanService } from './vehicle-loan.service';

describe('VehicleLoanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleLoanService]
    });
  });

  it('should be created', inject([VehicleLoanService], (service: VehicleLoanService) => {
    expect(service).toBeTruthy();
  }));
});
