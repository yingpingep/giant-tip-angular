import { Component, Input, OnInit } from '@angular/core';
import { Style } from '../style';

@Component({
  selector: 'app-style-b',
  templateUrl: './style-b.component.html',
  styleUrls: ['./style-b.component.scss']
})
export class StyleBComponent implements Style {
  @Input() userName: string;
  @Input() userTitle: string;
  @Input() postContent: string;

}
