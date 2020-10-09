import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHelper]',
})
export class HelperDirective implements OnInit {
  hasRed = false;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.hasRed = this.el.nativeElement.tagName === 'P' ? true : false;
  }
}
