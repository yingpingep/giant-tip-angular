import { IMyService,  MyService,  MY_SERVICE_TOKEN } from './my-service';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

export const mySrvFactory = (): IMyService => {
  return new MyService();
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: MY_SERVICE_TOKEN,
      useClass: MyService
    }
  ],
})
export class AppComponent implements OnInit {
  title = 'day4';
  constructor(@Inject(MY_SERVICE_TOKEN) private mySrv: IMyService) {}
  ngOnInit(): void {
    this.mySrv.hello();
  }
}
