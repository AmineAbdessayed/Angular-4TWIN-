import { TestBed } from '@angular/core/testing';

import { PatageService } from './patage.service';

describe('PatageService', () => {
  let service: PatageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
