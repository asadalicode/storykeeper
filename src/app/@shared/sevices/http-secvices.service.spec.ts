import { TestBed } from '@angular/core/testing';

import { HttpSecvicesService } from './http-secvices.service';

describe('HttpSecvicesService', () => {
  let service: HttpSecvicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSecvicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
