import { Component, OnInit } from '@angular/core';
import { Style } from '../style';

@Component({
  selector: 'app-style-a',
  templateUrl: './style-a.component.html',
  styleUrls: ['./style-a.component.scss']
})
export class StyleAComponent implements Style, OnInit {

  name: string;
  title: string;
  avatar: string;
  content: string;
  constructor() { }
  ngOnInit(): void {
  }

}
