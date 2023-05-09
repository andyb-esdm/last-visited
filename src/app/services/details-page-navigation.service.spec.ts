import { TestBed } from '@angular/core/testing';

import { DetailsPageNavigationService } from './details-page-navigation.service';

describe('DetailsPageNavigationService', () => {
  let service: DetailsPageNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsPageNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
