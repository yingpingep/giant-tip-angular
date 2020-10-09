import { ColorDirective } from './color.directive';
import { HelperDirective } from './helper.directive';

describe('ColorDirective', () => {
  it('should create an instance', () => {
    const directive = new ColorDirective({} as HelperDirective);
    expect(directive).toBeTruthy();
  });
});
