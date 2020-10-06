import { Optional } from '@angular/core';
import { Component, OnInit, ViewRef } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  constructor(@Optional() public viewRef: ViewRef) {
    console.log(`⚡: AComponent -> constructor -> this.viewRef`, this.viewRef);
  }

  ngOnInit(): void {
  }

}
