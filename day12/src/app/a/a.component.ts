import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class AComponent implements OnInit, OnChanges {
  @Input() x: string;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`⚡: AComponent -> ngOnChanges -> x`, this.x);
  }
}
