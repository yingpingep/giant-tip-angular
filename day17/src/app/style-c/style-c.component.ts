import { Component, Input, OnInit } from '@angular/core';
import { Style } from '../style';

@Component({
  selector: 'app-style-c',
  templateUrl: './style-c.component.html',
  styleUrls: ['./style-c.component.scss']
})
export class StyleCComponent implements Style {
  @Input() userName: string;
  @Input() userTitle: string;
  @Input() postContent: string;
}
