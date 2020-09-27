import { OnChanges, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMydir]',
})
export class MydirDirective implements OnInit, OnChanges {
  @Input() x: string;
  constructor(private ele: ElementRef<HTMLDivElement>) {}
  ngOnInit(): void {
    const pEle = document.createElement('ol');
    pEle.textContent = 'myDir works!';
    this.ele.nativeElement.appendChild(pEle);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`⚡: MydirDirective -> ngOnChanges -> this.x`, this.x);
  }
  add(): void {

  }
}
