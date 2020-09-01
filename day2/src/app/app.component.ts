import { Component, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ɵrenderComponent } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day2';
  show = false;
  constructor(private vc: ViewContainerRef, private cfr: ComponentFactoryResolver) {}
  check(): void {
    // this.vc.createComponent(this.cfr.resolveComponentFactory(HelloComponent));
    ɵrenderComponent(HelloComponent, { host: 'div[hoho]' });
  }
}
