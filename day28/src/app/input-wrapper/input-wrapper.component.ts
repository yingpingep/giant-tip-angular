import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-wrapper',
  styleUrls: ['./input-wrapper.component.scss'],
  template: `
    <mat-form-field>
      <mat-label>Day 28</mat-label>
      <input
        matInput
        placeholder="Day 28"
        #v
        (keyup)="userValueChange.emit(v.value)"
      />
    </mat-form-field>
  `,
})
export class InputWrapperComponent {
  @Input() userValue: string;
  @Output() userValueChange = new EventEmitter<string>();
  constructor() {}
}
