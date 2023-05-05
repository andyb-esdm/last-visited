import { TestBed } from '@angular/core/testing';

import { CompartmentNavigationService } from './compartment-navigation.service';

describe('CompartmentNavigationService', () => {
  let service: CompartmentNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartmentNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
