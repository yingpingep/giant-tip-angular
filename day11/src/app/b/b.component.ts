import { Component, Host, OnInit, Optional } from '@angular/core';
import { CosService, ICosService } from '../cos.service';

export class BCosService implements ICosService {
  print(): string {
    return '⚡: BCosService -> service from BComponent';
  }
}

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  providers: [
    {
      provide: CosService,
      useClass: BCosService
    }
  ]
})
export class BComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
