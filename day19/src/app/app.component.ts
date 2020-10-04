import { ContentChildren, QueryList } from '@angular/core';
import { AfterContentInit, Component, ContentChild, ViewChild } from '@angular/core';
import { TempDirective } from './temp.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('tTemp') tTemp: TempDirective;
  title = 'day19';
  myContext = {$implicit: 'World', localTw: '世界'};
}
