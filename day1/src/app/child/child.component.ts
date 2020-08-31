import { Component, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private parent: ParentComponent) {
    console.log(`⚡: ChildComponent -> constructor -> parent`, this.parent);
   }

  ngOnInit(): void {
  }

}
