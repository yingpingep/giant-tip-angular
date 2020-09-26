import { Component, OnInit } from '@angular/core';
import { ICosService } from '../cos.service';

export class CCosService implements ICosService {
  print(): string {
    return '⚡: CCosService -> service from CComponent';
  }
}

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss'],
  providers: [
    {
      provide: CCosService,
      useClass: CCosService
    }
  ]
})
export class CComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
