import { HelloComponent } from './../hello/hello.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  constructor(private hc: HelloComponent) { }

  ngOnInit(): void {
    console.log(`⚡: WorldComponent -> ngOnInit -> this.hc`, this.hc);
  }

}
