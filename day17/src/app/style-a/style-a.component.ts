import { Component, Input, OnInit } from '@angular/core';
import { StyleComponent } from '../style';

@Component({
  selector: 'app-style-a',
  templateUrl: './style-a.component.html',
  styleUrls: ['./style-a.component.scss']
})
export class StyleAComponent extends StyleComponent {
  constructor() {
    super();
  }
}
