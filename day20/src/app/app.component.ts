import {
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  OnInit,
  Optional,
  Type,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'day20';
  constructor(
    private injector: Injector,
    public cfResolver: ComponentFactoryResolver,
    public vc: ViewContainerRef
  ) {}

  ngOnInit(): void {
    console.log(`⚡: AppComponent -> ngOnInit -> this.vc`, this.vc);
    // const a = this.cfResolver.resolveComponentFactory<AppComponent>(
    //   AppComponent
    // );
    // const b = a.create(this.injector);
    // console.log(`⚡: AppComponent -> constructor -> b`, b);
    // console.log(`⚡: AppComponent -> constructor -> b.hostView`, b.hostView);
  }
}
