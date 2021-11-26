import { TestBed } from '@angular/core/testing';

import { DataSerService } from './data-ser.service';

describe('DataSerService', () => {
  let service: DataSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
