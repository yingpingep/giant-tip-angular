import { TestBed } from '@angular/core/testing';

import { EchoEvent } from './custom-event.service';

describe('CustomEventService', () => {
  let service: EchoEvent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchoEvent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
