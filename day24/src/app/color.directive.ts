import {
  Directive,
  Host,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { HelperDirective } from './helper.directive';

@Directive({
  selector: '[appHelper]',
})
export class ColorDirective {
  @HostBinding('class.red') get red(): boolean {
    return this.helper.hasRed;
  }
  @HostBinding('href') get hoho(): string {
    return 'hoho';
  }
  constructor(@Host() private helper: HelperDirective) {
    console.log(`⚡: ColorDirective -> constructor -> this.helper`, this.helper);
  }
}
