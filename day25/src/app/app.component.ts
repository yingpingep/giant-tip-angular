import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'day25';
  show = true;
  interval1 = interval(1000);

  interval2Value = 0;
  interval2 = interval(1000);
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    this.interval2.subscribe((x) => {
      this.interval2Value = x;
    });
  }

  changeShow(): void {
    this.show = !this.show;
  }
}
