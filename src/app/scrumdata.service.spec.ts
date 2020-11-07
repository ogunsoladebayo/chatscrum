import { TestBed } from '@angular/core/testing';

import { ScrumdataService } from './scrumdata.service';

describe('ScrumdataService', () => {
  let service: ScrumdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrumdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
