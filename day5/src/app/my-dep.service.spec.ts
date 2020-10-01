import { TestBed } from '@angular/core/testing';

import { MyDepService } from './my-dep.service';

describe('MyDepService', () => {
  let service: MyDepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
