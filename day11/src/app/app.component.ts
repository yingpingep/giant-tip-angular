import { Component } from '@angular/core';
import { CosService, ICosService } from './cos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day11';
  constructor(public cos: CosService) {}
}
