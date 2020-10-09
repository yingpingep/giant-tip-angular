import { Directive, HostBinding } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngModel]'
})
// tslint:disable-next-line: directive-class-suffix
export class NgModelStatus {
  constructor(public control: NgModel) {}
  @HostBinding('class.valid') get valid(): boolean { return this.control.valid; }
  @HostBinding('class.invalid') get invalid(): boolean { return this.control.invalid; }

}
