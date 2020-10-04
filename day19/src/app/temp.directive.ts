import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemp]',
  exportAs: 'tempDirective'
})
export class TempDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
