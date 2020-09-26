import { Component, OnInit } from '@angular/core';
import { CosService, ICosService } from '../cos.service';

export class ACosService implements ICosService {
  print(): string {
    return '⚡: ACosService -> service from AComponent';
  }
}

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
  // providers: [
  //   {
  //     provide: CosService,
  //     useClass: ACosService
  //   }
  // ]
})
export class AComponent implements OnInit {

  constructor(public cos: CosService) { }

  ngOnInit(): void {
  }

}
