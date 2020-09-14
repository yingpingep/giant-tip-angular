import { DOCUMENT } from '@angular/common';
import { inject, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'day4';
  constructor(@Inject(DOCUMENT) private _document: any) {}
  ngOnInit(): void {}
}
