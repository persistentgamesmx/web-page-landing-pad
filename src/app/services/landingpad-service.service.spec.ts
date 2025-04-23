import { TestBed } from '@angular/core/testing';

import { LandingpadServiceService } from './landingpad-service.service';

describe('LandingpadServiceService', () => {
  let service: LandingpadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingpadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
