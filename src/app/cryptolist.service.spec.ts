import { TestBed } from '@angular/core/testing';

import { CryptolistService } from './cryptolist.service';

describe('CryptolistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptolistService = TestBed.get(CryptolistService);
    expect(service).toBeTruthy();
  });
});
