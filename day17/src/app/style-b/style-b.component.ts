import { Component, OnInit } from '@angular/core';
import { Style } from '../style';

@Component({
  selector: 'app-style-b',
  templateUrl: './style-b.component.html',
  styleUrls: ['./style-b.component.scss']
})
export class StyleBComponent implements Style, OnInit {

  name: string;
  title: string;
  content: string;
  constructor() { }

  ngOnInit(): void {
  }

}
