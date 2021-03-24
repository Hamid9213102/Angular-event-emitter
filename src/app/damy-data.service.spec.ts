import { TestBed } from '@angular/core/testing';

import { DamyDataService } from './damy-data.service';

describe('DamyDataService', () => {
  let service: DamyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DamyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
