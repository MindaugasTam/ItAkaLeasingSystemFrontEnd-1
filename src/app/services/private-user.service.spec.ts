import { TestBed, inject } from '@angular/core/testing';

import { PrivateUserService } from './private-user.service';

describe('PrivateUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateUserService]
    });
  });

  it('should be created', inject([PrivateUserService], (service: PrivateUserService) => {
    expect(service).toBeTruthy();
  }));
});
