import { Component, Input } from '@angular/core';

@Component(
  {
    selector: 'base-style',
    template: ''
  }
)
export class StyleComponent {
  @Input() userName: string;
  @Input() userTitle: string;
  @Input() postContent: string;

}
export type StyleData = {
  userName: string;
  userTitle: string;
  postContent: string;
};
