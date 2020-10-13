import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-slider-wrapper',
  templateUrl: './slider-wrapper.component.html',
  styleUrls: ['./slider-wrapper.component.scss']
})
export class SliderWrapperComponent {
  @Input() sliderValue: number;
  @Output() sliderValueChange = new EventEmitter<number>();
  constructor() { }

  onChange(event: MatSliderChange): void {
    this.sliderValueChange.emit(event.value);
  }
}
