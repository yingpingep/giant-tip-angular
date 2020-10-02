import { Component, Input, OnInit } from '@angular/core';
import { StyleComponent } from '../style';

@Component({
  selector: 'app-style-c',
  templateUrl: './style-c.component.html',
  styleUrls: ['./style-c.component.scss']
})
export class StyleCComponent extends StyleComponent {
  constructor() {
    super();
  }
}
