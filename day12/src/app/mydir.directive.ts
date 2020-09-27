import { OnChanges, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMydir]',
  exportAs: 'mydir'
})
export class MydirDirective implements OnInit, OnChanges {
  @Input() x: string;
  count = 1;
  constructor(private ele: ElementRef<HTMLDivElement>) {}
  ngOnInit(): void {
    const litem = document.createElement('li');
    litem.textContent = `init item ${this.count}`;
    this.ele.nativeElement.appendChild(litem);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`⚡: MydirDirective -> ngOnChanges -> this.x`, this.x);
  }
  add(): void {
    const litem = document.createElement('li');
    litem.textContent = `item ${++this.count}`;
    this.ele.nativeElement.appendChild(litem);
  }
}
