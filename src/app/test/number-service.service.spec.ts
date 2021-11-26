import { TestBed } from '@angular/core/testing';

import { NumberServiceService } from './number-service.service';

describe('NumberServiceService', () => {
  let service: NumberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
