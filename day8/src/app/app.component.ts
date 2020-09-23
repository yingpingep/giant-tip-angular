import {
  Component,
  InjectionToken,
  Inject,
  AfterViewInit,
  Injector,
} from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

export const MULTI_TOKEN = new InjectionToken<readonly string[]>(
  'Hey im new token!'
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: MULTI_TOKEN,
      useValue: 'OK',
      multi: true,
    },
    {
      provide: MULTI_TOKEN,
      useValue: 'OOOOOK',
      multi: true,
    },
  ],
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(EVENT_MANAGER_PLUGINS) public x: any) {
    console.log(`⚡: AppComponent -> constructor -> x`, x);
  }

  ngAfterViewInit(): void {
    console.log(`⚡: AppComponent -> ngAfterViewInit -> this.x`, this.x);

  }
}
