import { TestBed } from '@angular/core/testing';

import { ContprovService } from './contprov.service';

describe('ContprovService', () => {
  let service: ContprovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContprovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
