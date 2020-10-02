import { Component, Type, ViewChild } from '@angular/core';
import { AnchorDirective } from './anchor.directive';
import { StyleComponent } from './style';
import { StyleAComponent } from './style-a/style-a.component';
import { StyleBComponent } from './style-b/style-b.component';
import { StyleCComponent } from './style-c/style-c.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(AnchorDirective) anchor: AnchorDirective;
  title = 'day17';
  cmpList: { name: string; cmp: Type<StyleComponent> }[] = [
    {
      name: 'A',
      cmp: StyleAComponent,
    },
    {
      name: 'B',
      cmp: StyleBComponent,
    },
    {
      name: 'C',
      cmp: StyleCComponent,
    },
  ];

  changeComponent(cmp: Type<StyleComponent>): void {
    this.anchor.loadComponent(cmp, {
      userTitle: 'Human',
      postContent: cmp.name,
      userName: 'Cat\'s follower'
    });
  }
}
