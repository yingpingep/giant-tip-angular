import { ElementRef } from '@angular/core';
import { HelperDirective } from './helper.directive';

describe('HelperDirective', () => {
  it('should create an instance', () => {
    const directive = new HelperDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
