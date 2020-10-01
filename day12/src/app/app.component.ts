import { Component, ViewChild } from '@angular/core';
import { MydirDirective } from './mydir.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('tMydir') mydir: MydirDirective;
  title = 'day12';
  clickMe(): void {
    this.mydir.add();
  }
}
