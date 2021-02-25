import { TestBed } from '@angular/core/testing';

import { PhoneRecordsService } from './phone-records.service';

describe('PhoneRecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneRecordsService = TestBed.get(PhoneRecordsService);
    expect(service).toBeTruthy();
  });
});
