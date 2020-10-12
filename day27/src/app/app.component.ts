import { Obj } from './obj';
import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('a') aInput: ElementRef<HTMLInputElement>;
  @ViewChild('b') bInput: ElementRef<HTMLInputElement>;
  @ViewChild('c') cInput: ElementRef<HTMLInputElement>;
  title = 'day27';
  objs = [{
    name: 'a',
    title: 'b',
    show: true
  },
  {
    name: 'b',
    title: 'c',
    show: true
  }];
  append(name: string, title: string, show: string): void {
    const newObj = {
      name,
      title,
      show: show <= '0' ? false : true,
    };
    this.objs.push(newObj);
  }
}
