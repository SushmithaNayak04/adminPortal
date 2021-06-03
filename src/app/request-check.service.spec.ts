import { TestBed } from '@angular/core/testing';

import { RequestCheckService } from './request-check.service';

describe('RequestCheckService', () => {
  let service: RequestCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
