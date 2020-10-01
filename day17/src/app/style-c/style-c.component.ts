import { Component, OnInit } from '@angular/core';
import { Style } from '../style';

@Component({
  selector: 'app-style-c',
  templateUrl: './style-c.component.html',
  styleUrls: ['./style-c.component.scss']
})
export class StyleCComponent implements Style, OnInit {

  name: string;
  title: string;
  content: string;
  constructor() { }

  ngOnInit(): void {
  }

}
