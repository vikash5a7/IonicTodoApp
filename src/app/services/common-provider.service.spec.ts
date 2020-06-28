import { TestBed } from '@angular/core/testing';

import { CommonProviderService } from './common-provider.service';

describe('CommonProviderService', () => {
  let service: CommonProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
