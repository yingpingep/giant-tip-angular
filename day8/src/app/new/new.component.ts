import { MULTI_TOKEN } from './../app.component';
import {
  Component,
  OnInit,
  Inject,
  inject,
  InjectionToken,
} from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [
    {
      provide: MULTI_TOKEN,
      useValue: 'new component',
      multi: true,
    },
  ],
})
export class NewComponent implements OnInit {
  constructor(@Inject(MULTI_TOKEN) private g: readonly string[]) {}

  ngOnInit(): void {
  }
}
