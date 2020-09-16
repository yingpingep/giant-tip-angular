import { Component, Inject, inject } from '@angular/core';
import { MY_SERVICE_TOKEN, IMyService, MyService } from './my-service.service';
import { MyDepService } from './my-dep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day5';
  word = '';
  constructor(@Inject(MY_SERVICE_TOKEN) mySvc: IMyService) {
    this.word = mySvc.print();
  }
}
