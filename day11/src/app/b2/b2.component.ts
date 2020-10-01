import { Component, Host, OnInit, Optional, Self } from '@angular/core';
import { CosService } from '../cos.service';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.scss']
})
export class B2Component implements OnInit {
  content = 'undefined';
  constructor(@Self() @Optional() public cos: CosService) { }

  ngOnInit(): void {
    if (this.cos) {
      this.content = this.cos.print();
    }
  }

}
