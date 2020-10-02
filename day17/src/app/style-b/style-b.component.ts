import { Component, Input, OnInit } from '@angular/core';
import { StyleComponent } from '../style';

@Component({
  selector: 'app-style-b',
  templateUrl: './style-b.component.html',
  styleUrls: ['./style-b.component.scss']
})
export class StyleBComponent extends StyleComponent {
  constructor() {
    super();
  }
}
