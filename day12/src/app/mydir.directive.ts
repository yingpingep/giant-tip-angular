import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMydir]',
})
export class MydirDirective implements OnInit {
  constructor(private ele: ElementRef<HTMLDivElement>) {}

  ngOnInit(): void {
    const pEle = document.createElement('p');
    pEle.textContent = 'myDir works!';
    this.ele.nativeElement.appendChild(pEle);
  }
}
