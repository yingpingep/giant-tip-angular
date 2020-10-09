import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  getBorder = false;
  @HostBinding('class.border') get(): boolean {
    return this.getBorder;
  }
  constructor() { }

  ngOnInit(): void {
    this.getBorder = true;
  }

}
