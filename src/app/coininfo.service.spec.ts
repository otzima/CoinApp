import { TestBed } from '@angular/core/testing';

import { CoininfoService } from './coininfo.service';

describe('CoininfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoininfoService = TestBed.get(CoininfoService);
    expect(service).toBeTruthy();
  });
});
