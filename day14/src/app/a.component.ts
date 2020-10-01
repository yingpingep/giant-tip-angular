import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  template: `
<ng-template ngFor let-item [ngForOf]="tempList">
  <p>{{item}}</p>
</ng-template>
`
})
export class AComponent {
  tempList = [
    'a',
    'b',
    'c',
    'd'
  ];
}
